

var x;
var audio = new Audio('sounds/tom-1.mp3');
audio.play();

function audio_play (x){
   // INSTEAD OF IF ELSE    ---------------------- SWITCH CASE also WORKS IN JS------------------
     if( x === "w")
     {

     var audio = new Audio('sounds/crash.mp3');
     audio.play();

        }

     else if(x === "a")
     {

     var audio = new Audio('sounds/kick-bass.mp3');
     audio.play();
     }

     else if(x === "s")
     {

     var audio = new Audio('sounds/snare.mp3');
     audio.play();
     }

     else if(x === "d")
     {

     var audio = new Audio('sounds/tom-1.mp3');
     audio.play();

     }

     else if(x === "j")
     {
     var audio = new Audio('sounds/tom-2.mp3');
     audio.play();
     }

     else if(x === "k")
     {
     var audio = new Audio('sounds/tom-3.mp3');
     audio.play();
     }

     else if(x === "l")
     {
     var audio = new Audio('sounds/tom-4.mp3');
     audio.play();
     }
}


function add_animation(key_press)
{
  var y = document.querySelector("."+key_press);
  // y.classList.add(".pressed");
  y.classList.add("pressed");

  // to remove the class pressed after a time delay(in milli seconds)

  setTimeout(function(){
    y.classList.remove("pressed");
  },100);
}


// for(var i=0;i<=6;i++) what if we need to add more buttons..its not  advisible to change the code regularly..so instead use....
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  // document.querySelectorAll("button")[i].addEventListener("click",function(){
  // this genrates an alert for all buttons in our website...so be more specific
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    audio_play(this.textContent);
    add_animation(this.textContent);
  });
    // alert("w");
}

// we are adding addEventListener to our entire DOM object or the website...so it detectes a key press when u are in the webpage
document.addEventListener("keypress",function(){
  audio_play(event.key);
  add_animation(event.key);
});
