var count_open_bracket=0;
var count_close_bracket=0;

function get_operand(operand)
{
  var input_var = document.getElementById("input");
  switch(operand)
  {
    case '+':
      input_var.value += '+';
      break;
    case '-':
      input_var.value += '-';
      break;
    case '/':
      input_var.value += '/';
      break;
    case 'x':
      input_var.value += '*';
      break;
    case '%':
      input_var.value += '%';
      break;
    case '(':
       input_var.value += '(';
       count_open_bracket++;
       break;
    case ')':
       input_var.value += ')';
       count_close_bracket++;
       break;
  }
}

function get_number(number)
{
  var input_var = document.getElementById("input");
  switch(number)
  {
    case 1:
      input_var.value += '1';
      break;
    case 2:
      input_var.value += '2';
      break;
    case 3:
      input_var.value += '3';
      break;
    case 4:
      input_var.value += '4';
      break;
    case 5:
      input_var.value += '5';
      break;
    case 6:
      input_var.value += '6';
      break;
    case 7:
      input_var.value += '7';
      break;
    case 8:
      input_var.value += '8';
      break;
    case 9:
      input_var.value += '9';
      break;
     case 0:
      input_var.value += '0';
      break;
      case '.':
      input_var.value += '.';
  }
}

function clear_all()
{
    var input_var = document.getElementById("input");
    input_var.value="";
    document.getElementById("result").value="";
     count_open_bracket=0;
     count_close_bracket=0;

}

function back_space()
{
    var input_var = document.getElementById("input");
    var ans = input_var.value;
    if(ans.length > 0)
    {
      ans = ans.substring(0,ans.length-1);
      input_var.value=ans;
    }
}

function square()
{
  var input_var = document.getElementById("input");
  var ans = (input_var.value)*(input_var.value);
  input_var.value = ans;
}


function precedence(y)
{
 switch(y)
 {
   case '+':
   case '-':
   return 1;
   break;
   case '/':
   case '*':
   case '%':
   return 2;
   break;
   default:
   return -1;
 }
}

function peek(y)
{
  for( var i=0;i<y.length;i++);
  return y[i-1];
}

function isempty(stack)
{
  if(stack.length===0)
  return true;
  else
  return false;
}

function root()
{
  var input_var = document.getElementById("input");
  var ans = Math.sqrt(input_var.value);
  input_var.value = ans;
}

var exp;
var operator=['*','+','-','/','%'];
var numbers=['1','2','3','4','5','6','7','8','9','0'];


function compute() {
  exp=[];
  var i=0;
  var input_var;
    input_var = document.getElementById("input").value;
    if(count_open_bracket!==count_close_bracket)
  {
    input_var.value="Syntax-Error";
  }
  else
  {

   for(i=0;i<input_var.length;i++)
   {


    if(input_var[i]==='(')
     {
       exp.push(input_var[i]);
     }
     else if(input_var[i]===')')
     {
       exp.push(input_var[i]);
     }
     else if(operator.includes(input_var[i]))
     {
       exp.push(input_var[i]);
     }
     else
     {
       var number=[];
       while(numbers.includes(input_var[i]))
       {
         number.push(input_var[i]);
         i++;
       }
       i--;
       var j=0;
       var res=0;
       number.reverse();
       for(j=0;j<number.length;j++)
       {
         res+=number[j]*Math.pow(10,j);
       }
       exp.push(res);
     }

   }
}
//alert(exp);
//infix to postfix expression

var i=0;
var stack=[];
var post_fix=[];
var j=0;
 for(i=0;i<exp.length;i++)
 {
   if(/^[0-9]+/.exec(exp[i]))
   {
     post_fix[j++]=exp[i];
   }
   else
   {
     if(/^[*+%/-]{1}$/.exec(exp[i]))
     {
       if(isempty(stack))
       {
         stack.push(exp[i]);
       }
       else
       {
         if(precedence(exp[i]) > precedence(peek(stack)) )
         {
           stack.push(exp[i]);
         }
         else
         {
           while(!(stack.length===0) && precedence(exp[i]) <= precedence(peek(stack)) )
           {
             post_fix[j++]=peek(stack);
             stack.pop();
           }
           stack.push(exp[i]);
         }
       }
     }

     else if(exp[i]==='(')
     {
       stack.push(exp[i]);
     }

     else if(exp[i]===')')
     {
       while(!(isempty(stack)) && peek(stack)!='(' )
       {
         post_fix[j++]=peek(stack);
         stack.pop();
       }
       if(!(isempty(stack)))
       {
         stack.pop();
       }
     }
   }
 }

 while(!(isempty(stack)))
 {
   post_fix[j++]=peek(stack);
   stack.pop();
 }
// alert(post_fix);

// postfix evaluation

var stack=[];
var i=0;
for(i=0;i<post_fix.length;i++)
{
  if(/^[0-9]+/.exec(post_fix[i]))
  {
    stack.push(post_fix[i]);
  }
  else if(post_fix[i]==='+')
  {
    var a =stack.pop();
    var b =stack.pop();
    var c = b+a;
    stack.push(c);
  }
  else if(post_fix[i]==='-')
  {
    var a =stack.pop();
    var b =stack.pop();
    var c = b-a;
    stack.push(c);
  }
  else if(post_fix[i]==='*')
  {
    var a =stack.pop();
    var b =stack.pop();
    var c = b*a;
    stack.push(c);
  }
  else if(post_fix[i]==='/')
  {
    var a =stack.pop();
    var b =stack.pop();
    var c = b/a;
    stack.push(c);
  }
  else if(post_fix[i]==='%')
  {
    var a =stack.pop();
    var b =stack.pop();
    var c = b%a;
    stack.push(c);
  }
}
document.getElementById("result").value =stack[0];
}
// for getting input from keyboard

document.addEventListener("keypress",function(e){
  var input_var = document.getElementById("input");
  switch(event.key)
  {
      case '1':
      input_var.value+='1';
      break;
      case '2':
      input_var.value+='2';
      break;
      case '3':
      input_var.value+='3';
      break;
      case '4':
      input_var.value+='4';
      break;
      case '5':
      input_var.value+='5';
      break;
      case '6':
      input_var.value+='6';break;
      case '7':
      input_var.value+='7';
      break;
      case '8':
      input_var.value+='8';
      break;
      case '9':
      input_var.value+='9';
      break;
      case '0':
      input_var.value+='0';
      break;
      case '+':
      input_var.value+='+';
      break;
      case '-':
      input_var.value+='-';
      break;
      case '/':
      input_var.value+='/';
      break;
      case '%':
      input_var.value+='%';
      break;
      case '*':
      input_var.value+='*';
      break;
      case ')':
      input_var.value+=')';break;
      case '(':
      input_var.value+='(';break;
  }
});


document.addEventListener("keydown",function (e) {
  //13 is keycode for enter
    if (e.keyCode === 13) {
        compute();
    }
    //8 is keycode for backspace
    if(e.keyCode === 8)
    {
      back_space();
    }
});
