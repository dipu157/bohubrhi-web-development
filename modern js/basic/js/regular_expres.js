
let re, str;

re = /hello/i;  // when we write i it omit case sensitivity
str = "World Hello";
str = "Hell world";  // complete match na hole hobe na
str = "Helloyen world"; // pura word match na korleo hobe
str = "hello and again hello"; // first ta return korbe

let result = re.exec(str);  //exec check reg expression

result = re.test(str);  //test true/false return kore

result = str.match(re);  //match exec er moto. but reg_expres method er param

result = str.search(re);  //search return index of first match or -1

str = "Hello world";
result = str.replace(re,"Hi"); // match kora take replace kore dey.
console.log(result);