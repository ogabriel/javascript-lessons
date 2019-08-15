setTimeout(function () {
    console.log("work 1");
    setTimeout(function () {
        console.log("work 2");
    }, 1000);
}, 1000);
console.log("end");

function asyncFunc(work) {
    return new Promise(function (resolve, reject) {
        if (work === "")
            reject(Error("Nothing"));
        setTimeout(function () {
            resolve(work);
        }, 1000);
    });
}

asyncFunc("work 1")
    .then((result) => {
        console.log(result);
        return asyncFunc("work 2");
    }, (error) => {
        console.log(error);
    })
    .then((result => {
        console.log(result);
    }, (error) => {
        console.log(error);
    }))
console.log("end");