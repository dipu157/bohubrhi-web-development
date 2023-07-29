
let re, str;

re = /hello/i;  // when we write i it omit case sensitivity
// Meta Characters
re = /^hello/; // Must start with
re = /hello$/; // Must end with
re = /world$/;
re = /^hello$/; // Must start and end with
re = /^h.llo$/; // Matches any one character
re = /h.llo/;
re = /h*llo/; // 0 or more times
re = /he?a?llo/; // Optional
re = /hello?/; // escaping


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
//console.log(result);

// Character Set using Brackets []
re = /h[eai]llo/; // Must be one of them inside brackets
re = /[HA]ello/i;
re = /[^ha]ello/; // Anything except those inside brackets
re = /^[ha]ello/; // Must start with h or a
re = /[A-Z]ello/; // Start with Uper Case
re = /^[A-Z]/; // First Letter must be upper case
re = /^[a-z]/;
re = /[A-Za-z]ello/;
re = /[0-9]ello/;
re = /^[0-9]ello/;
re = /[^0-9]ello/; // Not digit
re = /^[0-9][0-9][0-9]ello/; // three digits
re = /^[0-9][0-9][0-9][0-9][0-9]/ // 5 digits

// Braces {} - Quantifier
re = /el{2}o/; // Must occur exactly 2 times
re = /el{3}o/; 
re = /hel{2,5}o/; // Range
re = /hel{2,}o/; // At least 2 times

// Parentheses () - Grouping
re = /^([0-9]){5}/; // /^[0-9][0-9][0-9][0-9][0-9]/ // 5 digits
re = /^([0-9]xy){4}/;

// Bangladeshi Phone Number
// total 11 digits
re = /^01[0-9]{9}$/;
re = /^+8801[0-9]{9}$/;


str = "2xy3xy7xy8xy";
str = "01788888888";
str = "+8801811888889";

reTest(re,str);
function reTest(re,str){
    if(re.test(str)){
        console.log(`'${str}' matches '${re.source}'`);
    }
    else{
        console.log(`'${str}' doesn't match '${re.source}'`);
    }
}