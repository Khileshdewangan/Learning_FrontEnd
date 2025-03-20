let btn = document.querySelector("button");
// btn.addEventListener("click" , function(e){
//     console.log(e);
//     console.log(this);
// });
btn.addEventListener("dblclick", function (e) {
    console.log(e);
    console.log(this);
});

// let inp = document.querySelector("input");
// inp.addEventListener("keyup", function(){
//     console.log("key pressed")
// });

let inp = document.querySelector("input");
inp.addEventListener("keydown", function (event) {
    // console.log(event);
    // console.log("code : ",event.code);
    // console.log("key : ",event.key);
    // console.log("key pressed")
});


inp.addEventListener("keydown", function (e) {
    // if(e.code=="ArrowUp"){
    if (e.code == "KeyU") {
        console.log("charecter move forword")
    }
    // if(e.code=="ArrowDown"){
    if (e.code == "KeyD") {
        console.log("charecter move backword")
    }
    // if(e.code=="ArrowLeft"){
    if (e.code == "KeyL") {
        console.log("charecter move left")
    }
    // if(e.code=="ArrowRight"){
    if (e.code == "KeyR") {
        console.log("charecter move right")
    }
})