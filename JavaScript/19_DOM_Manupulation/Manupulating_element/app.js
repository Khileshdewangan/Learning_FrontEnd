//run all command in browswr console

let para = document.querySelector("p");
// console.dir(para.innerHTML);
// console.dir(para.innerText);
// console.dir(para.textContent);

// para.innerText = "khilesh"
// para.innerHTML = "khilesh"
// para.innerHTML = "<b>khilesh</b>"
// para.innerHTML = "<i>khilesh</i>"
// para.innerHTML = "<h1>khilesh</h1>"


let h = document.querySelector("h1");
// console.dir(h)
// para.innerHTML = `${h.innerHTML}`





//Example : Getter & setter 
// Element.getAttriute(name)
// Element.setAttriute(name, value)

let img = document.querySelector("img");
img.attributes      //collection of all attributes
img.getAttribute
img.getAttribute('id')
// img.setAttribute("id", "newset")
// img.setAttribute("src", "image/creation_1.png");


// img.getAttribute("class")   //null
// img.setAttribute("class", "newClass")    //set class attribute
// img.getAttribute("class")
// 'newClass'


// img.hasAttribute("class")   //false  (chack for existence of an attributes)
// img.hasAttribute("id")  //true



//remove Attributes
// img.getAttribute("src")
// img.removeAttribute("src")





//manipulating style with style attribute object
//Note : style object do not show css style in this method

// h.style     //show style object of it
h.style.color="orange"
h.style.backgroundColor="black"
