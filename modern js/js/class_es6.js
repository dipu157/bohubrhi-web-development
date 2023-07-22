class Person{
    constructor(fname,lname,dob){
        this.firstname = fname;
        this.Lastname = lname;
        this.dob = dob;
    }

    details(){
        console.log(this.firstname + " "+ this.Lastname+" "+this.dob)
    }
}

let person1 = new Person('ahmed','dipu','05-12-1990');
let person2 = new Person('Mamun','shikder','05-09-1980');
let person3 = new Person('rana','mondol','16-12-2000');

console.log(person1.details())
console.log(person2.details())
console.log(person3.details())