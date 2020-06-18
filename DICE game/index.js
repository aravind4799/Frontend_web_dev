var randomvar1;
randomvar1=Math.floor((Math.random() * 6) + 1);
document.querySelector(".img1").setAttribute("src","images/dice"+randomvar1+".png");


var randomvar2;
randomvar2=Math.floor((Math.random() * 6) + 1);
document.querySelector(".img2").setAttribute("src","images/dice"+randomvar2+".png");


if(randomvar1>randomvar2)
{
 document.querySelector("h1").textContent = "Player1 wins!";
 // syntax error textContent("player1 wins!");
}
else if(randomvar1<randomvar2)
{
  document.querySelector("h1").textContent = "Player2 wins!";
  }
  else
  {
    document.querySelector("h1").textContent="Refresh again";
  }
