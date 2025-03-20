let btn = document.querySelector(".btn");
let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
    let link = await getimage();
    // console.log(link);

    let p = document.querySelector("img");
    p.setAttribute("src", link);

});



async function getimage() {
    try {
        let res = await axios.get(url);
        // console.log(res.data.message);
        return res.data.message;
    } catch (e) {
        console.log("error is - : ", e);
        return "no image found";
    }
}