let url2 = "https://catfact.ninja/fact";


async function getfacts() {
    try {
        let res = await fetch(url2);
        let data = await res.json();
        // console.log(data);
        console.log("DATA FACT-1", data.fact);


        let res2 = await fetch(url2);
        let data2 = await res2.json();
        console.log("DATA FACT-2", data2.fact);
    } catch (e) {
        console.log("error in catch block", e);

    }

    console.log("byy byyy.........!!!!")

}