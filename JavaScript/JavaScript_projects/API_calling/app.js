let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);
    let cllArr = await getcollege(country);
    // console.log(cllArr
    show(cllArr);

});

function show(cllArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for (col of cllArr) {
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getcollege(country) {
    try {
        // let country = "nepal";
        let res = await axios.get(url + country);
        // console.log(res.data);
        return res.data;

    } catch (e) {
        console.log(e);
        return [];
    }
}