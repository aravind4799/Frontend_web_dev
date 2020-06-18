var check= 0;

document.getElementById("checkbox-4").addEventListener("click",function(){
  var x;
  x = document.createElement("INPUT");
  if(check===1)
  {
    console.log();
    //x.remove();
  }
  if(check===0)
  {
  document.getElementById("checkbox-error").innerHTML="";
  x.setAttribute("type", "text");
  x.setAttribute("value","enter lanuages here");
  document.body.appendChild(x);
  check=1;
  }
});

document.getElementById("image").addEventListener("click",function(){
  document.getElementById("image-error").innerHTML="";
});

function removeWarning() {
    document.getElementById(this.id + "-error").innerHTML = "";
}

document.getElementById("radio-1").addEventListener("mousedown",function(){
  document.getElementById("radio-error").innerHTML="";
});
document.getElementById("radio-2").addEventListener("mousedown",function(){
  document.getElementById("radio-error").innerHTML="";
});
document.getElementById("radio-3").addEventListener("mousedown",function(){
  document.getElementById("radio-error").innerHTML="";
});
document.getElementById("radio-4").addEventListener("mousedown",function(){
  document.getElementById("radio-error").innerHTML="";
});
document.getElementById("checkbox-1").addEventListener("mousedown",function(){
  document.getElementById("checkbox-error").innerHTML="";
});
document.getElementById("checkbox-2").addEventListener("mousedown",function(){
  document.getElementById("checkbox-error").innerHTML="";
});
document.getElementById("checkbox-3").addEventListener("mousedown",function(){
  document.getElementById("checkbox-error").innerHTML="";
});

document.getElementById("date").addEventListener("click",function(){
  document.getElementById("date-error").innerHTML="";
});

document.getElementById("name").onkeyup = removeWarning;
document.getElementById("username").onkeyup = removeWarning;
document.getElementById("password").onkeyup = removeWarning;
document.getElementById("email").onkeyup = removeWarning;


  // document.getElementById("form-validation").onsubmit = function(){
    var x = document.getElementById("radio-1").checked;
    var y = document.getElementById("radio-2").checked;
    var z = document.getElementById("radio-3").checked;
    var a = document.getElementById("radio-4").checked;
    var b = document.getElementById("name").value;
    var c = document.getElementById("username").value;
    var d = document.getElementById("password").value;
    var e = document.getElementById("email").value;
    var f = document.getElementById("date").value;
    var g = document.getElementById("image").value;
    var i = document.getElementById("checkbox-1").checked;
    var j = document.getElementById("checkbox-2").checked;
    var k = document.getElementById("checkbox-3").checked;
    var l = document.getElementById("checkbox-4").checked;
    var m = document.getElementById("textarea").value;
    var submit =true;

  document.getElementById("name").addEventListener("click",function(){
    var x = document.getElementById("radio-1").checked;
    var y = document.getElementById("radio-2").checked;
    var z = document.getElementById("radio-3").checked;
    var a = document.getElementById("radio-4").checked;
    if(x === false && y=== false && z=== false && a=== false)
     {
     document.getElementById("radio-error").innerHTML="<em> salutations FIELD MISSING</em>";
     document.getElementById("radio-error").style.color="red";
       submit=false;
     }

});

  document.getElementById("username").addEventListener("click",function(){
    var b = document.getElementById("name").value;
       if(b===""||b===null)
       {
         document.getElementById("name-error").innerHTML="<em>name FIELD MISSING</em>";
         document.getElementById("name-error").style.color="red";
           submit=false;
       }
    var x = document.getElementById("radio-1").checked;
    var y = document.getElementById("radio-2").checked;
    var z = document.getElementById("radio-3").checked;
    var a = document.getElementById("radio-4").checked;
    if(x === false && y=== false && z=== false && a=== false)
     {
     document.getElementById("radio-error").innerHTML="<em> salutations FIELD MISSING</em>";
     document.getElementById("radio-error").style.color="red";
       submit=false;
     }
});
  document.getElementById("password").addEventListener("click",function(){
    var c = document.getElementById("username").value;
       if(c===""||c===null)
       {
         document.getElementById("username-error").innerHTML="<em>username FIELD MISSING</em>";
         document.getElementById("username-error").style.color="red";
         submit=false;
       }
    var b = document.getElementById("name").value;
       if(b===""||b===null)
       {
         document.getElementById("name-error").innerHTML="<em>name FIELD MISSING</em>";
         document.getElementById("name-error").style.color="red";
           submit=false;
       }
    var x = document.getElementById("radio-1").checked;
    var y = document.getElementById("radio-2").checked;
    var z = document.getElementById("radio-3").checked;
    var a = document.getElementById("radio-4").checked;
    if(x === false && y=== false && z=== false && a=== false)
     {
     document.getElementById("radio-error").innerHTML="<em> salutations FIELD MISSING</em>";
     document.getElementById("radio-error").style.color="red";
       submit=false;
     }
});





  document.getElementById("email").addEventListener("click",function(){
    var d = document.getElementById("password").value;
       if(d===""||d===null)
       {
         document.getElementById("password-error").innerHTML="<em>password FIELD MISSING</em>";
         document.getElementById("password-error").style.color="red";
         submit=false;
       }
    var c = document.getElementById("username").value;
       if(c===""||c===null)
       {
         document.getElementById("username-error").innerHTML="<em>username FIELD MISSING</em>";
         document.getElementById("username-error").style.color="red";
         submit=false;
       }
    var b = document.getElementById("name").value;
       if(b===""||b===null)
       {
         document.getElementById("name-error").innerHTML="<em>name FIELD MISSING</em>";
         document.getElementById("name-error").style.color="red";
           submit=false;
       }
    var x = document.getElementById("radio-1").checked;
    var y = document.getElementById("radio-2").checked;
    var z = document.getElementById("radio-3").checked;
    var a = document.getElementById("radio-4").checked;
    if(x === false && y=== false && z=== false && a=== false)
     {
     document.getElementById("radio-error").innerHTML="<em> salutations FIELD MISSING</em>";
     document.getElementById("radio-error").style.color="red";
       submit=false;
     }
});


  document.getElementById("date").addEventListener("click",function(){
    var e = document.getElementById("email").value;
        if(e===""||e===null)
         {
            document.getElementById("email-error").innerHTML="<em>email FIELD MISSING</em>";
            document.getElementById("email-error").style.color="red";

            submit=false;
        }
    var d = document.getElementById("password").value;
       if(d===""||d===null)
       {
         document.getElementById("password-error").innerHTML="<em>password FIELD MISSING</em>";
         document.getElementById("password-error").style.color="red";
         submit=false;
       }
    var c = document.getElementById("username").value;
       if(c===""||c===null)
       {
         document.getElementById("username-error").innerHTML="<em>username FIELD MISSING</em>";
         document.getElementById("username-error").style.color="red";
         submit=false;
       }
    var b = document.getElementById("name").value;
       if(b===""||b===null)
       {
         document.getElementById("name-error").innerHTML="<em>name FIELD MISSING</em>";
         document.getElementById("name-error").style.color="red";
           submit=false;
       }
    var x = document.getElementById("radio-1").checked;
    var y = document.getElementById("radio-2").checked;
    var z = document.getElementById("radio-3").checked;
    var a = document.getElementById("radio-4").checked;
    if(x === false && y=== false && z=== false && a=== false)
     {
     document.getElementById("radio-error").innerHTML="<em> salutations FIELD MISSING</em>";
     document.getElementById("radio-error").style.color="red";
       submit=false;
     }
});

  document.getElementById("image").addEventListener("click",function(){
    var f = document.getElementById("date").value;
       if(f===""||f===null)
       {
         document.getElementById("date-error").innerHTML="<em>date FIELD MISSING</em>";
         document.getElementById("date-error").style.color="red";

           submit=false;
       }
    var e = document.getElementById("email").value;
        if(e===""||e===null)
         {
            document.getElementById("email-error").innerHTML="<em>email FIELD MISSING</em>";
            document.getElementById("email-error").style.color="red";

            submit=false;
        }
    var d = document.getElementById("password").value;
       if(d===""||d===null)
       {
         document.getElementById("password-error").innerHTML="<em>password FIELD MISSING</em>";
         document.getElementById("password-error").style.color="red";
         submit=false;
       }
    var c = document.getElementById("username").value;
       if(c===""||c===null)
       {
         document.getElementById("username-error").innerHTML="<em>username FIELD MISSING</em>";
         document.getElementById("username-error").style.color="red";
         submit=false;
       }
    var b = document.getElementById("name").value;
       if(b===""||b===null)
       {
         document.getElementById("name-error").innerHTML="<em>name FIELD MISSING</em>";
         document.getElementById("name-error").style.color="red";
           submit=false;
       }
    var x = document.getElementById("radio-1").checked;
    var y = document.getElementById("radio-2").checked;
    var z = document.getElementById("radio-3").checked;
    var a = document.getElementById("radio-4").checked;
    if(x === false && y=== false && z=== false && a=== false)
     {
     document.getElementById("radio-error").innerHTML="<em> salutations FIELD MISSING</em>";
     document.getElementById("radio-error").style.color="red";
       submit=false;
     }
});

    if(i===true || j===true || k===true || l===true)
    {
      var g = document.getElementById("image").value;
       if(g===""||g===null)
        {
         document.getElementById("image-error").innerHTML="<em>image FIELD MISSING</em>";
         document.getElementById("image-error").style.color="red";
         submit=false;
       }
    var f = document.getElementById("date").value;
       if(f===""||f===null)
       {
         document.getElementById("date-error").innerHTML="<em>date FIELD MISSING</em>";
         document.getElementById("date-error").style.color="red";

           submit=false;
       }
    var e = document.getElementById("email").value;
        if(e===""||e===null)
         {
            document.getElementById("email-error").innerHTML="<em>email FIELD MISSING</em>";
            document.getElementById("email-error").style.color="red";

            submit=false;
        }
    var d = document.getElementById("password").value;
       if(d===""||d===null)
       {
         document.getElementById("password-error").innerHTML="<em>password FIELD MISSING</em>";
         document.getElementById("password-error").style.color="red";
         submit=false;
       }
    var c = document.getElementById("username").value;
       if(c===""||c===null)
       {
         document.getElementById("username-error").innerHTML="<em>username FIELD MISSING</em>";
         document.getElementById("username-error").style.color="red";
         submit=false;
       }
    var b = document.getElementById("name").value;
       if(b===""||b===null)
       {
         document.getElementById("name-error").innerHTML="<em>name FIELD MISSING</em>";
         document.getElementById("name-error").style.color="red";
           submit=false;
       }
    var x = document.getElementById("radio-1").checked;
    var y = document.getElementById("radio-2").checked;
    var z = document.getElementById("radio-3").checked;
    var a = document.getElementById("radio-4").checked;
    if(x === false && y=== false && z=== false && a=== false)
     {
     document.getElementById("radio-error").innerHTML="<em> salutations FIELD MISSING</em>";
     document.getElementById("radio-error").style.color="red";
       submit=false;
     }
    }

  document.getElementById("textarea").addEventListener("click",function(){
    var i = document.getElementById("checkbox-1").checked;
    var j = document.getElementById("checkbox-2").checked;
    var k = document.getElementById("checkbox-3").checked;
    var l = document.getElementById("checkbox-4").checked;
       if(i===false && j===false && k===false && l=== false)
       {
         document.getElementById("checkbox-error").innerHTML="<em>checkbox FIELD MISSING</em>";
         document.getElementById("checkbox-error").style.color="red";
           submit=false;
       }
      var g = document.getElementById("image").value;
       if(g===""||g===null)
        {
         document.getElementById("image-error").innerHTML="<em>image FIELD MISSING</em>";
         document.getElementById("image-error").style.color="red";
         submit=false;
       }
    var f = document.getElementById("date").value;
       if(f===""||f===null)
       {
         document.getElementById("date-error").innerHTML="<em>date FIELD MISSING</em>";
         document.getElementById("date-error").style.color="red";

           submit=false;
       }
    var e = document.getElementById("email").value;
        if(e===""||e===null)
         {
            document.getElementById("email-error").innerHTML="<em>email FIELD MISSING</em>";
            document.getElementById("email-error").style.color="red";

            submit=false;
        }
    var d = document.getElementById("password").value;
       if(d===""||d===null)
       {
         document.getElementById("password-error").innerHTML="<em>password FIELD MISSING</em>";
         document.getElementById("password-error").style.color="red";
         submit=false;
       }
    var c = document.getElementById("username").value;
       if(c===""||c===null)
       {
         document.getElementById("username-error").innerHTML="<em>username FIELD MISSING</em>";
         document.getElementById("username-error").style.color="red";
         submit=false;
       }
    var b = document.getElementById("name").value;
       if(b===""||b===null)
       {
         document.getElementById("name-error").innerHTML="<em>name FIELD MISSING</em>";
         document.getElementById("name-error").style.color="red";
           submit=false;
       }
    var x = document.getElementById("radio-1").checked;
    var y = document.getElementById("radio-2").checked;
    var z = document.getElementById("radio-3").checked;
    var a = document.getElementById("radio-4").checked;
    if(x === false && y=== false && z=== false && a=== false)
     {
     document.getElementById("radio-error").innerHTML="<em> salutations FIELD MISSING</em>";
     document.getElementById("radio-error").style.color="red";
       submit=false;
     }
});



  document.getElementById("form-validation").onsubmit=function(){

    var x = document.getElementById("radio-1").checked;
    var y = document.getElementById("radio-2").checked;
    var z = document.getElementById("radio-3").checked;
    var a = document.getElementById("radio-4").checked;
    var b = document.getElementById("name").value;
    var c = document.getElementById("username").value;
    var d = document.getElementById("password").value;
    var e = document.getElementById("email").value;
    var f = document.getElementById("date").value;
    var g = document.getElementById("image").value;
    var i = document.getElementById("checkbox-1").checked;
    var j = document.getElementById("checkbox-2").checked;
    var k = document.getElementById("checkbox-3").checked;
    var l = document.getElementById("checkbox-4").checked;
    var m = document.getElementById("textarea").value;
    var submit =true;
       if(m===""||m===null)
       {
         document.getElementById("textarea-error").innerHTML="<em>text FIELD MISSING</em>";
         document.getElementById("textarea-error").style.color="red";
         submit=false;
       }
       if(/^[A-Za-z]{1,3}[.]{1}[A-Za-z]{3,30}$/.exec(b)===null)
       {
         document.getElementById("name-error").innerHTML="<em>expected format<br> inital . name </em>";
         document.getElementById("name-error").style.color="red";
           submit=false;
       }
       if(/^[a-zA-Z ]+/.exec(c)===null)
       {
         document.getElementById("username-error").innerHTML="<em>expected format<br> only alphabets accepted</em>";
         document.getElementById("username-error").style.color="red";
         submit=false;
       }
        if(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&_~*])[a-zA-z0-9!@#$%^&_~*]{8,}$/.exec(d)==null)
        {
          document.getElementById("password-error").innerHTML="suggest a strong password <br>expected 1 uppercase,1 lowercase,1 special character,length minimum:8 for PASSWORD";
          //alert("expected 1 uppercase,1 lowercase,1 special character,length minimum:8 for PASSWORD");
          document.getElementById("password-error").style.color="red";

            submit=false;
        }
        if(/^[A-za-z.0-9_]{3,}@[A-Za-z]{3,}\.[A-Za-z.]{3,8}$/.exec(e)==null)
        {
          //alert("expected email formats - xxxx@some.com, xxx.yyy@some.org, xxx@some1.some2.net");
          document.getElementById("email-error").innerHTML="<em>INVALID EMAIL</em>";
          document.getElementById("email-error").style.color="red";

          submit=false;
        }
       if(f!==""||f!==null)
       {
       var date =new Date(f);
       var year_of_birth=date.getFullYear();
       var curdate = new Date();
       var current_year=curdate.getFullYear();
       var age = (current_year) - (year_of_birth);
       if(!(age > 18 && age < 35))
       {
         //alert("expected age:18-35");
         //submit=false;
         document.getElementById("date-error").innerHTML="<em>accepting only age between 18-35</em>";
         document.getElementById("date-error").style.color="red";
         submit=false;
       }
     }
       var list = document.querySelectorAll("#username-list option");
       for(var count=0;count<list.length;count++)
       {
         if(list[count].value === c )
          {
            var username_array=["battlebee","hulk","stromborn","tom","jerry"];
            alert(" username already exist try using any of these usernames :  " + username_array);
            submit = false;
            document.getElementById("username-error").innerHTML="<em>UserName already exits</em>";
            document.getElementById("username-error").style.color="red";
            submit=false;
          }
       }
        if((i===true && j===false && k===false && l===false)||(i===false && j===true && k===false && l===false)||(i===false && j===false && k===true && l===false)||(i===false && j===false && k===false && l===true))
       {
         alert("atleast two checkbox should be selected");
         document.getElementById("checkbox-error").innerHTML="atleast two checkbox should be selected";
         document.getElementById("checkbox-error").style.color="red";
         submit=false;
       }


      if(submit===true)
       {
         alert("details have been submitted succesfully");
       }

        return submit;
     }


     
