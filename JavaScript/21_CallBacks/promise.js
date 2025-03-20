// function savetoDB(data, success, failuer) {
//     let speed = Math.floor(Math.random() * 10) + 1;
//     if (speed > 4) {
//         console.log(data)
//         success();
//     } else {
//         failuer();
//     }
// }



// savetoDB("khilesh", () => {
//     console.log("succes : data save");
//     savetoDB("dewangan", () => {
//         console.log("succes-2 : data save-2");
//         savetoDB("Bhilai", () => {
//             console.log("succes-3 : data save-3");
//         }, () => {
//             console.log("week connection-3");
//         });
//     }, () => {
//         console.log("week connection-2");
//     })
// }, () => {
//     console.log("week connection ");
// });

//<----------------------------------------------------------------------------------------------------->

function savetoDB(data) {
    return new Promise((success, failuer) => {
        let speed = Math.floor(Math.random() * 10) + 1;
        if (speed > 4) {
            success("RESULT : success " + data);
        } else {
            failuer("ERROR : faile " + data);
        }

    });
}

// let request = savetoDB("khilesh");  //req. = Promise object
// request.then(() => {
//     console.log("promise fulfilled");
//     console.log(request);
// }).catch(() => {
//     console.log("promise reject")
//     console.log(request);
// });

//----------------aur short form------------------
// savetoDB("bhilai")
//     .then(() => {
//         console.log("SUCCESS : Promise Fulfilled");
//     })
//     .catch(() => {
//         console.log("REJECT : Promise Rejected")
//     });



//-----------------------------Promise chaining----------------------
// savetoDB("khilesh")
//     .then(() => {
//         console.log("data save-1");
//         savetoDB("dewangan")
//             .then(() => {
//                 console.log("data save-2");
//             })
//     })
//     .catch(() => {
//         console.log("week connection-1")
//     })



//----------------------aur short form of promise chaining----------------------
// savetoDB("khilesh")
//     .then(() => {
//         console.log("data save-1");
//         return savetoDB("dewangan");
//     })
//     .then(() => {
//         console.log("data save-2");
//         return savetoDB("bhilai");
//     })
//     .then(() => {
//         console.log("data save-3");
//     })
//     .catch(() => {
//         console.log("week connection");
//     })





//<----------------Result and error in promise--------------------------->
savetoDB("khilesh")
    .then((result) => {
        console.log(result);
        console.log("data save-1");
        return savetoDB("dewangan");
    })
    .then((result) => {
        console.log(result);
        console.log("data save-2");
        return savetoDB("bhilai");
    })
    .then((result) => {
        console.log(result);
        console.log("data save-3");
    })
    .catch((error) => {
        console.log(error);
        console.log("week connection");
    })