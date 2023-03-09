//gnerates a random number for both players
player1randomNumer = Math.floor(Math.random() * 6 + 1); 
player2randomNumer = Math.floor(Math.random() * 6 + 1); 
//concatenates the random number to the file paths
player1Dice = "images/dice" + player1randomNumer + ".png";
player2Dice = "images/dice" + player2randomNumer + ".png";
//selects the img class and changes the attributes accordingly
document.querySelector(".img1").setAttribute("src",player1Dice); 
document.querySelector(".img2").setAttribute("src",player2Dice); 
//game logic to see who wins the game
if (player1randomNumer > player2randomNumer){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (player1randomNumer < player2randomNumer){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "It's a tie!";
}
