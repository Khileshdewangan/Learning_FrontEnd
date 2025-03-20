async function greet() {
    // throw new Error("new aerror occures");
    // throw "some new error"

    return "hello";
}

greet()
    .then((res) => {
        console.log("promise succesfull", res);
    }).catch((err) => {
        console.log("promise rejected : ", err);
    });


let demofun = async () => {
    // throw "OOPS error h";
    return "its a demo funtion";
}

demofun()
    .then((res) => {
        console.log("success", res)
    })
    .catch((err) => {
        console.log("reject", err)
    })




// <----------------------------------------Await------------------------------------------->

function getnum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    })
}

async function demo2() {
    getnum();
    await getnum();
    await getnum();
    getnum();
    getnum();
    getnum();

}