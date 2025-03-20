let url2 = "https://catfact.ninja/fact";
let url = "https://dog.ceo/dog-api/documentation/random";
let btn = document.querySelector(".fact");
let btn2 = document.querySelector(".dog");


btn.addEventListener("click", async () => {
    let fact = await getfacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerHTML = fact;
})


btn2.addEventListener("click", async () => {
    let fact = await getfacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerHTML = fact;
})

async function getfacts() {
    try {
        let res = await axios.get(url);
        // console.log("DATA FACT-1", res.data);
        // console.log("DATA FACT-1", res.data.fact);
        // console.log("DATA FACT-1", res.data.length);
        return res.data.fact;

    } catch (e) {
        console.log("error in catch block", e);
        return "no fact found";
    }

    console.log("byy byyy.........!!!!")

}


async function getImage() {
    try {
        let res = await axios.get(url);
        // console.log("DATA FACT-1", res.data);
        // console.log("DATA FACT-1", res.data.fact);
        // console.log("DATA FACT-1", res.data.length);
        console.log(res);

    } catch (e) {
        console.log("error in catch block", e);
        return "no Image found";
    }

    console.log("byy byyy.........!!!!")

}