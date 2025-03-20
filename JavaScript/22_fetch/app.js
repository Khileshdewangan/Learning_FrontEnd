let url = "https://catfact.ninja/fact";


// fetch(url)
//     .then((res) => {
//         console.log(res);
//         // console.log(res.json());
//         res.json().then((data) => {
//             console.log(data);
//         })
//     }).catch((e) => {
//         console.log(e);
//     })



fetch(url)
    .then((res) => {
        console.log(res);
        return res.json();
    }).then((data) => {
        console.log("DATA-1 : ", data.fact);
        return fetch(url);
    }).then((res) => {
        return res.json();
    }).then((data) => {
        console.log("DATA-2 : ", data.fact);
    })

    .catch((e) => {
        console.log(e);
    })


console.log("END");