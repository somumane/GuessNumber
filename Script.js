let random=parseInt(Math.random()*100+1)
const userInput=document.querySelector('.input')
const submit=document.querySelector('.submit')
const Prev=document.querySelector('.prevguess')
const Remaining=document.querySelector('.remaining')
const Result=document.querySelector('.result')
const Msg=document.querySelector('.msg')
const p=document.createElement('p');


let prev=[]
let numguess=0
let play=true

if(play){
    submit.addEventListener('click',(e)=>{
    e.preventDefault()
    const guess=parseInt(userInput.value)
    validateguess(guess)
    })
}
validateguess=(guess)=>{
if(isNaN(guess)){
    alert(`Please Enter valid Number`)
}
else if(guess<1){
    alert(`Please Enter Number More than 1`)
}
else if(guess>100){
    alert(`Please Enter Number less than 100`)
}else{
    prev.push(guess)
    if(numguess===9){
    cleanUpguess(guess)
    displaymsg(`Game Over.. Number Is ${random}`)
    endGame()
    } else{
        cleanUpguess(guess)
        checkguess(guess)
    }
}
}
function checkguess(guess){
    if(guess===random){
        displaymsg(`You Won`)
        endGame()
    } else if(guess<random){
        displaymsg(`Number is low`)
    }
     else if(guess>random){
        displaymsg(`Number is High`)
    }
}
function cleanUpguess(guess){
    userInput.value=''
    Prev.innerHTML+=`${guess} `
    numguess++;
    Remaining.innerHTML=`${10-numguess}`

}
function displaymsg(Message){
Result.innerHTML=`<h2>${Message}</h2>`
}
function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 class="newGame">Start new Game</h2>`
    Msg.appendChild(p)
    play=false;
    newGame()
}
function newGame(){
const newgamebtn=document.querySelector('.newGame')
newgamebtn.addEventListener('click',(e)=>{
e.preventDefault()
random=parseInt(Math.random()*100+1)
prev=[]
numguess=0
Prev.innerHTML=''
Remaining.innerHTML=`${10-numguess}`
userInput.removeAttribute('disabled')
Msg.removeChild(p)
play=true
})
}