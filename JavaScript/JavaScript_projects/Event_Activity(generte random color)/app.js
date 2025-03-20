let btn = document.querySelector("button");

let randomColor = () => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red},${green},${blue})`;
    return color
}

// btn.addEventListener("click", function () {
//     let color = randomColor();
//     let div = document.querySelector("div");
//     let h = document.querySelector("h3");
//     h.innerText = color;
//     div.style.backgroundColor = color;
// });

btn.onclick =  function () {
        let color = randomColor();
        let div = document.querySelector("div");
        let h = document.querySelector("h3");
        h.innerText = color;
        div.style.backgroundColor = color;
    }



// let div = document.querySelector("div");
// div.onmouseenter = function(){
    // console.log("you enterd inside color box")
// }

// let h = document.querySelector("h3");
// h.onclick = function(){
//     console.log("you cliced in header")
// }

