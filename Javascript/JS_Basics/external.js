// window.addEventListener("load", function(){
//     document.getElementById("btn").addEventListener("click", function(){
//         var val = document.getElementById("box_1").value;
//         document.getElementById("result").innerHTML = val;
//     })
// });

// Event Binding
window.addEventListener("load", init);

function init(){
    console.log("Window Loaded...");
    document.getElementById("btn").addEventListener("click", hello);
}

function hello(){
    console.log("Hello function executed...");
    var val = document.getElementById("box_1").value;
    document.getElementById("result").innerHTML = val;
}