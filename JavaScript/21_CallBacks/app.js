let h = document.querySelector("h1");

// function changecolore(color, delay, nextcolorchange) {
//     setTimeout(() => {
//         h.style.color = color;
//         if (nextcolorchange) {
//             nextcolorchange();
//         }
//     }, delay);
// }




// //nesting callbacks --> its called callback hell
// changecolore("red", 1000, () => {
//     changecolore("blue", 1000, () => {
//         changecolore("green", 1000, ()=>{
//             changecolore("orange",1000)
//         });
//     });
// });



// //simple example of callBack function
// //callback is a function argument of function 

// function add(a,b){
//     return a+b;
// }


// function multiply(a,b){
//     return a*b;
// }


// function calculator(a, b, operator){
//     return operator(a,b);
// }


// console.log(calculator(5,6,add));




//------------------------using promise------------------------
function colorchange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h.style.color = color;
            console.log(`color change in ${color}`)
            resolve("color change");
        }, delay);
    });
}


// colorchange("red", 1000)
//     .then(() => {
//         console.log("color change in red");
//         return colorchange("blue", 1000);
//     })
//     .then(() => {
//         console.log("color change in blue");
//         return colorchange("orange", 1000);
//     })
//     .then(() => {
//         console.log("color change in orange");
//         return colorchange("green", 1000);
//     })
//     .then(() => {
//         console.log("color change in green");
//         return colorchange("gray", 1000);
//     })

// -------------------------------using async and await keyword-----------------------
async function demo() {
    await colorchange("red", 5000);
    await colorchange("orange", 5000);
    await colorchange("blue", 5000);
    await colorchange("green", 5000);
}

// demo();