let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let delbtns = document.querySelectorAll(".delete");


btn.addEventListener("click", () => {
    let item = document.createElement("li");
    item.innerText = input.value;


    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);

    ul.appendChild(item)
    console.log(input.value);
    input.value = "";
});


//using event delegation
ul.addEventListener("click", (event) => {
    // console.dir(event.target);
    // console.dir(event.target.nodeName);
    // console.log(event.target.parentElement);
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});

// for(delbtn of delbtns){
//     delbtn.addEventListener("click",()=>{
//         // let par = this.parentElement;
//         let li = document.querySelector("li");
//         // console.log(par);
//         li.remove();
//         // par.remove();
//     })
// }
