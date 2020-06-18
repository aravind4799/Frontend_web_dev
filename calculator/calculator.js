
// npm install body-parser

// is to pass the details from the html file in order to perform operations with it in server end

const a = require("express");
const app = a();
// require body-parser package which is installed
const bodyParser=require("body-parser");

// using body-parser in express
// bodyParser.text() - to get data as text
// bodyParser.json() - to get data as json file
// bodyParser.urlencoded() - to get form info from a form

app.use(bodyParser.urlencoded({extended: true }));
app.get("/",function(req,res){
  // __dirname returns the path for the current file calculator
  // and from there navigate to reach into index.html
   // res.sendFile("index.html"); also works but if we are about to host the server at cloud this wont work
  res.sendFile(__dirname + "/index.html");
});

// to handle localhost:3030/bmicalculator
app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmicalculator.html");
});
// to handle the post request from the index.html form
app.post("/",function(req,res){
  // from the body tag in index.html the value number1 (in the name field in the input tag)
  // req.body.number1 is a text
  var num1= Number(req.body.number1);
  var num2= Number(req.body.number2);
  // without converting this text into number    var result = num1 + num2 ; results into a contatenation opertaion
  var result = num1 + num2 ;
  res.send("the result after addition:"+ result);
});

// to handle post from localhost:3030/bmicalculator
app.post("/bmicalculator",function(req,res){
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);

  var bmi =  weight / height * height;
  res.send("your BMI   "+ bmi);
});

// server started at port 3030 and waiting for requests from browsers
app.listen(3030,function(){
  console.log("server started at 3030");
});
