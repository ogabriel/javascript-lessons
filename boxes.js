alert("I am learning js");

var input = prompt("Please put your most liked programming language");

var sure = "Are you sure that you like: ";
var result = confirm(sure.concat(input, "?"));

if (result) {
   alert("I'm glad that you like it"); 
} 
else {
   alert("thats ok");
}