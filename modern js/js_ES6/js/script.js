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
    console.log(`Hello Mr. ${fname} ${lname}.`)
}

test(...person);
