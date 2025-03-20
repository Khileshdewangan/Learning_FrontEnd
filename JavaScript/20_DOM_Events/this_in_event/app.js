let btn = document.querySelector("button");
btn.addEventListener("dblclick", function(){
    console.dir(this);
    this.style.backgroundColor = "blue";
})
// btn.ondblclick

// let div2 = document.querySelector("div");
// div.addEventListener("click", function(){
//     console.log(this)
//     this.style.backgroundColor = "red";
// });


//alternet option using make funtion

let h1 = document.querySelector("h1");
h1.addEventListener("click", showDocument);

let h3 = document.querySelector("h3");
h3.addEventListener("click", showDocument);

let p = document.querySelector("p");
p.addEventListener("click", showDocument);

let div = document.querySelector("div");
div.addEventListener("click", showDocument);



function showDocument(){
    console.log(this)
    this.style.backgroundColor = "red";
}