/*
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
*/

//task 1 
const myPromise = new Promise(function (resolve, reject) {
    //do async work
    setTimeout(() => {
        console.log("wow");
        resolve();
    }, 1000);
})
myPromise.then(function () {
    console.log("myPromise exexuted");
});


//task 2
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("wowow");
        resolve();
    }, 2000);
}).then(() => {
    console.log("task 2 done");
});


//task 3
new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (error) {
            console.log("oops! rejected");
            reject("from reject function");
        }
        else {
            console.log("yay! resolved");
            resolve("from resolve function");
        }
    }, 3000);
})
    .then((fromResolve) => {
        console.log("only when promise is resolved");
        console.log(fromResolve);
    })
    .catch((fromReject) => {
        console.log("when promise is rejected");
        console.log(fromReject);
    });


//task 4
new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (error) {
            reject("OOPS! ERROR : 404");
        }
        else {
            resolve([1, 2, 3, 4]);
        }
    }, 4000);
})
    .then((arr) => ({ ...arr }))
    .then((myObject) => console.log(myObject))
    .catch((fromReject) => {
        console.log(fromReject);
    });


// async-await
const lastPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (error) {
            reject("OOPS! ERROR : 404");
        }
        else {
            resolve({ userName: "deepesh", age: 21, branch: "cse" });
        }
    },5000);
})
async function TaskFive() {
    try {
        //if promise is resolved
        let response = await lastPromise;
        console.log(response)
    } catch (error) {
        //if promise is rejected
        console.log(error);
    }
}
TaskFive();


