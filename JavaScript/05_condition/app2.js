const num = prompt("please enter range thr number ");
const random = Math.floor(Math.random() * num + 1);
console.log(random);

let guess = prompt("guess the number in your range ");

while (true) {
    if (guess == "quit") {
        alert("you are quit. number was " + random);
        break;
    }
    if (random == guess) {
        alert("Right..!  number was " + random);
        break;
    }
    else if (random < guess) {
        alert("you enter large number");
        guess = prompt("enter some small number");
    }
    else if (random > guess) {
        alert("you enter samall number");
        guess = prompt("enter some large number");
    }
}