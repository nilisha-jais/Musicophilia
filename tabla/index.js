
document.querySelector(".t").addEventListener("click",function (){
	var audio=new Audio("sound/t.mp3");
	audio.play();
})
document.querySelector(".d").addEventListener("click",function (){
	var audio=new Audio("sound/d.mp3");
	audio.play();
})
document.querySelector(".u").addEventListener("click",function (){
	var audio=new Audio("sound/u.m4a");
	audio.play();
})
document.querySelector(".w").addEventListener("click",function (){
	var audio=new Audio("sound/w.m4a");
	audio.play();
})
document.querySelector(".y").addEventListener("click",function (){
	var audio=new Audio("sound/y.m4a");
	audio.play();
})
var audioa = new Audio("sound/t.mp3");
var audiob = new Audio("sound/d.mp3");
var audioc = new Audio("sound/u.m4a");
var audiod = new Audio("sound/w.m4a");
var audioe = new Audio("sound/y.m4a");

window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {
 if (key.keyCode == "84") { 
    audioa.play();
 }
 if(key.keyCode == "68"){ 
    audiob.play();
 }
 if (key.keyCode == "85") { 
    audioc.play();
 }
 if(key.keyCode == "87"){ 
    audiod.play();
 }
 if(key.keyCode == "89"){ 
    audioe.play();
 }
}