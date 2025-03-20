let h = document.querySelector("h1");

function colorchange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if (num > 3) {
                // console.log("promise reject 2");
                reject("promise reject");
            }
            h.style.color = color;
            console.log(`color change in ${color}`)
            resolve("color change");
        }, delay);
    });
}


async function demo() {
    try {
        await colorchange("red", 1000);
        await colorchange("orange", 1000);
        await colorchange("blue", 1000);
        await colorchange("green", 1000);
    } catch (e) {
        console.log("error occur");
        console.log(e);
    }

    let a = 3;
    console.log(a);
    console.log("new number is : ", a + 5);

}