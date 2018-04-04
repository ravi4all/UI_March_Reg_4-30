window.addEventListener("load", init);

var firstnum;
var secondnum;
var result;
var span;

function init(){
    firstnum = document.getElementById("num_1");
    secondnum = document.getElementById("num_2");
    span = document.getElementById("result");
    document.getElementById("add").addEventListener("click",add);
    document.getElementById("sub").addEventListener("click",sub);
    document.getElementById("mul").addEventListener("click",mul);
    document.getElementById("div").addEventListener("click",div);
}

function add(){
    result = parseInt(firstnum.value) + parseInt(secondnum.value);
    // console.log("Result is",result);
    span.innerHTML = result;
}
function sub(){
    result = parseInt(firstnum.value) - parseInt(secondnum.value);
    // console.log("Result is",result);
    span.innerHTML = result;
}
function mul(){
    result = parseInt(firstnum.value) * parseInt(secondnum.value);
    // console.log("Result is",result);
    span.innerHTML = result;
}
function div(){
    result = parseInt(firstnum.value) / parseInt(secondnum.value);
    // console.log("Result is",result);
    span.innerHTML = result;
}