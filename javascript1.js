var h3=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var main=document.getElementById("Gradeint");


function declareColor(){
		main.style.background = "linear-gradient( to right ,"+ color1.value+", "+ color2.value+")";
		h3.textContent=main.style.background +")";
}
color1.addEventListener("input",declareColor);
color2.addEventListener("input",declareColor);

