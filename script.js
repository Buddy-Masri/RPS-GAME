let a = document.getElementById('score-box')
let b = document.getElementById('result-box')
let c = document.getElementById('result2-box')
let d = document.querySelectorAll('.image-container');

let score = 0

let addScore = ()=>{
  a.innerHTML=`Score = ${score+=1}`, c.innerHTML='You Win'
}

let subtScore =()=> {
  a.innerHTML=`Score = ${score-=1}`, c.innerHTML='Mac Wins'
}

let draw = ()=>{
c.innerHTML='Its a Draw'
}

d.forEach(click=>click.onclick=(myScore, computerScore)=>{
  let array = ["Rock","Paper","Scissors"]
  let i = Math.floor(Math.random() * array.length)
  myScore = click.value
  computerScore = array[i]
  b.innerHTML = `💁🏻‍♂️ : ${myScore} vs 🤖 : ${computerScore}`
  if (computerScore=='Paper'){
    subtScore()
  }
  else if (computerScore=='Scissors'){
    addScore()
  }
  else {draw()}  
  })
  
let fx4 = () =>{
  score = 0
  a.innerHTML=''
  c.innerHTML=''
  b.innerHTML=''
};









