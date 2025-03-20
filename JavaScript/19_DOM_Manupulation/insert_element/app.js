//insert element 
// document.createElement("div")
// appendChild(Element)
// append(Element)
// prepend(Element)
// insertAdjacentElement/Text/HTML(where, element)
// where = "beforeend"
// where = "beforebegin"
// where = "afterbegin"
// where = "afterend"

let newp = document.createElement("p");
newp.innerText = "i am paragraph";
// newp.append("some more context");

let mydiv = document.body.querySelector("div");


// mydiv.append(newp);
// mydiv.prepend(newp);
// mydiv.insertAdjacentElement("beforebegin", newp)
// mydiv.insertAdjacentElement("beforeend", newp)
// mydiv.insertAdjacentElement("afterend", newp)
// mydiv.insertAdjacentElement("beforeend", newp)




///remove elemenet
// removeChild(element_name);
// remove();