var foods = ["Cake", "Ice Cream", "Chocolates", "Bread"];
var numbers = [1, 32, 31, 2];

// 1st Parameter : Item
// 2nd Parameter : Index
// 3rd Parameter : Whole Array

let printEverything = function(item, i){
    //console.log(`Index : ${i} and Item ${item}`);
    //console.log(abc);
}
foods.forEach(printEverything);

// Spred Operator

var numbers =[1,54,-7,45,0,8]

let person = ["Ahmed", "Dipu"]

let test = (fname,lname) => {
    //console.log(`Hello Mr. ${fname} ${lname}.`)
}

test(...person);

//Promise
let prom = new Promise((resolve,reject) =>{
    let a;

    setTimeout(() =>{
        a = 1+2;

        if(a==3){
            resolve("Success");
        }else{
            reject("Failed");
        }
    },2000)    
});

prom.then((message) => {
    //console.log("I am from " + message);
}).catch((message) => {
   // console.log("I am from catch " + message);  
})

//console.log("I am after promise");


// Async Await

// fetch('http://api.icndb.com/jokes/random/5000')
//     .then(response => response.json())
//     .then(data => console.log(data));

async function getJokes() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    return data;
}

console.log(getJokes());







