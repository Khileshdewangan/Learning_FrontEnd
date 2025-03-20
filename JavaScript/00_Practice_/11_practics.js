const prompt = require("prompt-sync")({ sigint: true })

let marks = {
    khilesh: 44,
    harry: 55,
    ravi: 66,
    monika: 77
}

//*************problem -01************ */
for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

//*************problem -02************ */
for (let key in marks) {
    console.log("the marks of " + key + marks[key])
}

//*************problem -03************ */
let cn = 44
let i
while (i != cn) {
    console.log("try again")
    i = prompt("enter the number ")
}
console.log("you have entered correct number")

//*************problem -04************ */
const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4
}
console.log("Mean of your Node. is " + mean(4, 5, 6, 7,))