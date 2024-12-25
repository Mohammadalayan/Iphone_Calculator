let input="";
let outputinput=document.getElementById("input");
let clear=document.getElementById("AC");
let output="";
let outputoutput=document.getElementById("output");

function appendToDisplay(input){
outputinput.innerHTML+=input;
}
function Clear(){
outputinput.innerHTML="";
outputoutput.innerHTML="";

}
function equal(){
    
    output=eval(outputinput.innerHTML)
    outputoutput.innerHTML=output;

}
