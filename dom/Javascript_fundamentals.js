//strings methods
let name = " deepesh    ";
let newName = name.trim();  // <-- it removes extra space from start and end
console.log(newName);
let s = "rajdevraj";
console.log(s.indexOf("raj")); // <-- 0
console.log(s.lastIndexOf("raj")); // <--6
let n = s.slice(2);
console.log(n);
let z = "simran thengi hai";
let expression = "a+bcd+io+s";
console.log(expression.split("+"));
console.log(s.padStart(21, "deepesh"));
console.log(s.padEnd(21, "deepesh"));
let i = 10;
function capitalize(str) {
    let ans = str[0].toUpperCase();
    return ans;
}
console.log(capitalize("deepesh") + "deepesh".slice(1));

//lexical scope
function outer() {

    function inner() {
        console.log(x);// inner function has access to x 
    }
    let x = 5;
    inner();

}
outer();
let x = [1, 2, 3, 4, 5];
for (let d of x) console.log(d);// <-- for-of loop

//maps
let map = new Map();
map.set("rohit", "good boy");
map.set("virat", "bad boy");
for (let item of map) {
    console.log(item);// it is printing both key-value pairs
}
for (let [item, val] of map) {
    console.log(item + ': ' + val); //this way we can both values separately
}

//creating an object
const person = {
    name: "deepesh",
    age: 21,
    branch: "cse"
};
//ways to access
console.log(person.name);
console.log(person["age"]);
let c = "branch";
console.log(person[c]);

//how to iterate over objects
for (let k in person) console.log(person[k]);//for-in loop 

let a = Object.keys(person); //returns an arrray of keys
let b = Object.values(person); //returns an array of values
let d = Object.entries(person); //returns a array of pairs of {key, value}
console.log(d);

//passing functions as arguments
function anything(func) {
    func();
}
anything(outer);

//returning a function
function MyFunc() {
    let a = 89;
    return function () {
        console.log(a);
    }
}
let someFunc = MyFunc();
someFunc();// <--89

//methods --> means functions as properties in objects
const deepesh = {
    add: function (x, y) {
        return x + y;
    }
};
console.log(deepesh.add(6, 7));
console.log(deepesh["add"](19, 1));// <-- 20

//this keyword: curr context
const robot = {
    name: "doremon",
    friend: "nobita",
    say: function () {
        console.log(`${this.name} and ${this.friend} are friends`);
    }
}
robot.say();
let kuch = robot.say;
kuch();// here 'this' has no context

//try-catch
try {
    let num = 9;
    console.log(xyz.toUpperCase());
} catch (e) {
    console.log("cannot divide by zero");
    //console.log(e);//you also get that error and you can use it
}

//for-each method : accepts a callback func 
let xyz = [1, 2, 3, 4, 5];
xyz.forEach((val, ind, arr) => {
    console.log(val, ind, arr);// on arrays it can use each item ,its index and whole array
})
let team = [
    {
        name: "virat",
        num: 3
    },
    {
        name: "rohit",
        num: 1
    },
    {
        name: "dhawan",
        num: 2
    }

];
team.forEach((item) => {
    console.log(`player name is ${item.name} and no. is ${item.num}`);
})

//Arrow functions
function rohit() {
    console.log("call me hitman");
}
let fan = () => {
    console.log("call me hitman");
}
rohit();
fan();

let add = (x, y) => {
    return x + y;
}
console.log(add(6, 7));
let add2 = (x, y) => (x + y); //implict return : only when fuction is directly returning something
console.log(add2(7, 8));
let check = () => console.log(this);
check();
let objectReturn = () => ({ name: "deepesh", age: 21 }); //returning an object implictly

//immediately invoked func expressions
(function haalChal() {
    console.log("aur bhai kya haal chal");
})();

// map-method : gives an array of what call-back returns
let p = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newp = p.map((item) => (item + 2));
console.log(newp);

//filter-method : filters the elements of array based upon your condition
//if call back returns true it is included in the new array
newp = p.filter((val) => (val < 3));
console.log(newp);

let newNums = p.filter((item) => (item % 2 === 0));
console.log(newNums);

let r = p.filter(function (item) {
    return item >= 5 && item <= 8;
});
let k = [];
p.forEach((item) => {
    if (item % 2 === 0) k.push(item); // same thing using for-each loop
});

//reduce-method
let nums = [3, 5, 7, 9];
const total = nums.reduce((acc, curr) => (acc * curr), 1);
console.log(total);

//spread in fuctions
let guddu = [1, 2, 3, 4, 5];
console.log(...guddu);//it logs all elements of array(any iterable ds) as separate arguments in function
let maxi = Math.max(...guddu);//equivalent to Math.max(1, 2, 3, 4, 5) :  takes all elements of array(any iterable ds) as separate arguments
//spread in array/strings
let one = [1, 2, 3, 4, 5];
let two = [6, 7, 8, 9];
let three = ["deepesh", ...one, ...two, "rajdev"];//["deepesh", 1, 2, 3, 4, 5, 6, 7, 8, 9, "rajdev"]
let four=[..."deep"];//all characters of strings are separated ['d', 'e', 'e', 'p'];
//spread in objects
let info = {
    name:"deepesh",
    branch:"cse",
    age:21
};
let more = {
    height:"175 cm",
    weight:"81 kg",
    name:"rajdev"
};
let copyCat = {...info};//created copy of that object and we can also add on some properties from our own
let addInfo = {...info,college:"MANIT"};
console.log(addInfo);
//what in case of conflict
let wow = {...info, ...more};
console.log(wow.name);// rajdev
let now = {...more, ...info};
console.log(now.name); // deepesh

//rest : looks similar to spread but it is totally diff
//makes array of the arguments
function sum(...nums){
    return nums.reduce((acc, curr) => (acc + curr), 0);
}
console.log(sum(1,2,3,4,5,6));
console.log(sum(1,2,3));


//array destructuring
let marks = [97, 98, 97, 85, 88];
let [maths, social, science,...restSubjects] = marks;
/*
maths --> marks[0] 
social --> marks[1]
science --> marks[2]
restSubjects is an array containibg rest subjects using rest 
*/
console.log(social);

//destructuring objects
let user = {
    firstName:"deepesh",
    lastName:"rajdev",
    age:21,
    branch:"cse"
};
let{lastName,branch,firstName:name2} = user;
console.log(lastName); //rajdev
//console.log(firstName); ERROR as we have given our own name
console.log(name2);//incse we want to give our own name then please remember now firstName is not ant variable
let user2 = {
    firstName:"rohit",
    lastName:"rajdev",
    age:21,
    branch:"cse"
}
let {firstName:name1} = user2;
console.log(name1);

//destructuring parameters
let students = [
    {
        name:"deepesh",
        age:21
    },
    {
        name:"rohit",
        age:35
    },
    {
        name:"virat",
        age:34
    }

];
const selected = students.filter((player) => player.age >= 34);//method 1 : without destructing
const Selected = students.filter(({age}) => age >= 34);//instead of passing the whole object we only passed useful properties in {}

