let outer = document.querySelector(".outer");
let midle = document.querySelector(".midle");
let inner = document.querySelector(".inner");

outer.addEventListener('click', ()=>{
    console.log("outer div click");
});

midle.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log("midle div click");
});

inner.addEventListener("click", (e)=>{
    e.stopPropagation();
    console.log("inner div click");
});