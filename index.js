

var rand1 = Math.ceil(Math.random() * 6);
var rand2 = Math.ceil(Math.random() * 6);


document.querySelector(".img1").setAttribute("src", "images/dice" + Math.ceil(rand1) + ".png" );
document.querySelector(".img2").setAttribute("src", "images/dice" + Math.ceil(rand2) + ".png" );


if(Math.ceil(rand1) > Math.ceil(rand2)){
    document.querySelector("h1").textContent = "🚩 Player 1 wins!";
}
else if(Math.ceil(rand1) < Math.ceil(rand2)){
    document.querySelector("h1").textContent = "Player 2 wins! 🚩";
}
else{
    document.querySelector("h1").textContent = "🏁Draw!";
}