let input = document.querySelector("#input");

input.addEventListener("input", function () {
    let p = document.querySelector("p");
    p.innerText=this.value;
    console.log(this.value)
})