var randomNumber1=Math.floor(Math.random()*6)+1
var randomDiceImage="dice"+randomNumber1+".png"
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage)
var randomNumber2=Math.floor(Math.random()*6)+1
var randomDiceImage2="dice"+randomNumber2+".png"
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2)
if (randomDiceImage > randomDiceImage2){
  document.querySelector("h1").innerHTML="🚩🎉player 1 won"
}
else if (randomDiceImage===randomDiceImage2){
  document.querySelector("h1").innerHTML="it's a tie 🤝"

}
else{
  document.querySelector("h1").innerHTML="Player 2 won🚩🎉"
}
