// let btn = document.querySelector("button");
// btn.onclick = function(){
//     console.log("liked by you");
//     // alert("liked by you");
// }


// <----------------------------------------------------------------------->
function hello() {
    console.log("hiii..............!!!!")
}

function myName() {
    console.log("my name is khilesh")
}
// btn.onclick=hello;
// <----------------------------------------------------------------------->

let btns = document.querySelectorAll("button");
for (btn of btns) {
    // btn.onmouseenter=function(){
    //     console.log("your enter in button");
    // }

    //both method not run in parallel and its promble solve addEventlistener
    // btn.onclick=myName;
    // btn.onclick=hello;
}



for (btn of btns) {
    //syntex : btn.addEventListener(Event, callBack);
    btn.addEventListener("click", myName);
    btn.addEventListener("click", hello);
}

// <----------------------------------------------------------------------->









