//document and window is the browser objects(document, window)


//Accessing childern of an element navigation (DOM methods)

// document.body.style.background = "blue";
console.dir(document.body.firstChild);
console.dir(document.body.lastChild);
console.dir(document.body.childNodes);
console.dir(document.body.children);

let a = document.body.firstChild;
console.dir(a.parentElement);
console.dir(a.parentNode);
console.dir(a.nextSibling);


console.log(a.firstChild);
console.log(a.firstElementChild);
console.log(a.nextElementSibling);


let changebg = () => {
    // document.querySelector("h1").classList = "blue"
    document.body.firstChild.nextElementSibling.style.color = "red";
};





