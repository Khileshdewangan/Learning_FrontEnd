function oddEvenTest(requet) {
    if (requet == "odd") {
        let odd = function (n) {
            console.log(!(n % 2 == 0))
        }
        return odd;
    }
    else if (requet == "even") {
        let even = function (n) {
            console.log((n % 2 == 0))
        }
        return even;
    } else {
        console.log("wrong request");
    }
}

let requet = "odd";
let fun = oddEvenTest(requet); //create indirectly odd funtion
fun(22);


requet = "even";
fun = oddEvenTest(requet); //create indirectly even funtion
fun(22);

// oddEvenTest("odd")(10)  in 