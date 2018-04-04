window.addEventListener("load", init);

var firstnum;
var secondnum;
var result;
var span;

function init(){
    firstnum = document.getElementById("num_1");
    secondnum = document.getElementById("num_2");
    span = document.getElementById("result");
    buttons = document.getElementsByTagName("button");
    for(var i =0; i < buttons.length; i++){
        buttons[i].addEventListener("click", calc);
    }
    // buttons.addEventListener("click", calc);
}

function calc(){
    // var elem = event.srcElement;
    // console.log(elem);
    var opr = event.srcElement.value;
    // console.log(opr);
    var expression = firstnum.value + opr + secondnum.value;
    // console.log(expression);
    result = eval(expression);
    span.innerHTML = result;
}