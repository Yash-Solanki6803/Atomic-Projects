var number1;
var number2;

number1=Math.floor(Math.random()*6) + 1;
number2=Math.floor(Math.random()*6) + 1;


var image1=document.querySelector(".img1");
var image2=document.querySelector(".img2");
var heading=document.querySelector("h1");

if(number1>number2)
{
    heading.textContent="Player 1 wins!";
    
}

else if(number1===number2)
{
    heading.textContent="DRAW!";
}

else
{
    heading.textContent="Player 2 wins!";
}

image1.setAttribute("src","./images/dice"+number1+".png");
image2.setAttribute("src","./images/dice"+number2+".png");