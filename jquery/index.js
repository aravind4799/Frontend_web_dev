alert("hi");
// $("h1").addclass("big_title");  wont work since addclass should be in camel casing
 $("h1").addClass("big_title");
 // $("h1").removeClass("big-title");

 $("button").text("don't click me");

 //$("button").html("<em>lolol<em>");


// to change the heading whenever there is a keypress in the website to corresponding key pressed
$(document).keypress(function(event){
  $("h1").text(event.key);
});
