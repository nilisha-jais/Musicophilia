
document.querySelectorAll("button")[0].addEventListener("click",function (){
	var audio=new Audio("sound/t.mp3.");
	audio.play();
})
document.querySelectorAll("button")[1].addEventListener("click",function (){
	var audio=new Audio("sound/d.mp3.");
	audio.play();
})
document.addEventListener("keypress",function (event){
	makeSound(event.key);
});
