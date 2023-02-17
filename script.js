let a = document.getElementById('score-box')
let b = document.getElementById('result-box')
let c = document.getElementById('result2-box')
let d = document.querySelectorAll('.image-container');

let addScore = ()=>{
  a.innerHTML=`Score = ${score+=1}`, c.innerHTML='You Win'
}

let subtScore =()=> {
  a.innerHTML=`Score = ${score-=1}`, c.innerHTML='Mac Wins'
}

let draw = ()=>{
c.innerHTML='Its a Draw'
}

let array = ["Rock","Paper","Scissors"]
let score = 0

let fx = (myScore, computerScore) => {
let i = Math.floor(Math.random() * array.length)
myScore = d[0].value
computerScore = array[i]
b.innerHTML = `💁🏻‍♂️ : ${myScore} vs 🤖 : ${computerScore}`
if (computerScore=='Paper'){
  subtScore()
}
else if (computerScore=='Scissors'){
  addScore()
}
else {draw()}
}

let fx2 = (myScore, computerScore) => {
let i = Math.floor(Math.random() * array.length)
myScore = d[1].value
computerScore = array[i]
b.innerHTML = `💁🏻‍♂️ : ${myScore} vs 🤖 : ${computerScore}`
if (computerScore=='Paper'){
  draw()}
else if (computerScore=='Scissors'){
  subtScore()}
else {addScore()}
}

let fx3 = (myScore, computerScore) => {
let i = Math.floor(Math.random() * array.length)
myScore = d[2].value
computerScore = array[i]
b.innerHTML = `💁🏻‍♂️ : ${myScore} vs 🤖 : ${computerScore}`
if (computerScore=='Paper'){
  addScore()}
else if (computerScore=='Scissors'){
  draw()}
else {subtScore()}
}

let fx4 = () =>{
  score = 0
  a.innerHTML=''
  c.innerHTML=''
  b.innerHTML=''
}


