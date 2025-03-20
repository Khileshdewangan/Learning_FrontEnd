let userSeq = [];
let gameSeq = [];
let start = false;
let level = 0;
let btns = ["yellow", "pink", "blue", "green"];
let h = document.querySelector("h3")

document.addEventListener("keypress", function () {
    if (start == false) {
        start = true
        console.log("game started")
        levelup();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 300);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 300);
}

function levelup() {
    userSeq = [];
    level++;
    h.innerText = `level - ${level}`

    let randomIdx = Math.floor(Math.random() * 4);
    let randomcolor = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomcolor}`)
    // console.log(randomIdx);
    // console.log(randomcolor);
    // console.log(randombtn);
    gameSeq.push(randomcolor);
    console.log(gameSeq);
    gameFlash(randombtn);
}

function checkans(idx) {
    // console.log(level);

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000);
        }
        // console.log("same sequence");
    } else {
        h.innerHTML = `GAME OVER ! Your Score was <b>${level}</b><br> press any to start game`;
        reset();
    }
}

function btnpress() {
    // console.log(this);
    let btn = this;
    userFlash(btn)

    let usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    // console.log(usercolor);
    checkans(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".box");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}