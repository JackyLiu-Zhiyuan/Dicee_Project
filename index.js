let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Won";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Won";
}
else {
  document.querySelector("h1").innerHTML = "It is a tie";
}


document.getElementsByClassName("img1")[0].src= "images/dice" + randomNumber1 + ".png";
document.getElementsByClassName("img2")[0].src= "images/dice" + randomNumber2 + ".png";
