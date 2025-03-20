let f = document.querySelector("form");

// f.addEventListener("submit", function (event) {
//     event.preventDefault();
//     // console.log(event);
//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
//     // console.log(inp);
//     // console.log(pass);
//     console.dir(user);
//     console.dir(user.value);
//     console.dir(pass.value);

//     alert(`hi ${user.value} your passwoed is ${pass.value}`);

// });

//alternative option
// f.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.dir(this);

//     // this.elements[0];
//     // this.elements[1];
//     // this.elements[2];

//     let user = this.elements[0];
//     let pass = this.elements[1];

//     console.dir(user.value);
//     console.dir(pass.value);

//     alert(`hi ${user.value} your passwoed is ${pass.value}`);

// });


f.addEventListener("submit", function(e){
    e.preventDefault();
})

let user = document.querySelector("#user");

user.addEventListener("change", function(){
    console.log("change event");
    console.log("final value", this.value);
});

user.addEventListener("input", function(){
    console.log("input event");
    console.log("final value", this.value);
});