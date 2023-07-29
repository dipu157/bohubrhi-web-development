
let exp,str;

function promptInput(InputId){
    let userInput = prompt("Enter Your Input");
    console.log("InputId : "+InputId);
    console.log("userInput : "+userInput);

    switch(InputId){
        case 'postCode':
            exp = /^\d{4}$/;
            str = userInput;

            if(exp.test(str)){
                alert("Post Code is Valid");
            }else{
                alert("Invalid PostCode");
            }
            break;
        
        case 'phone':
            exp = /^01[0-9]{9}$/;
            str = userInput;

            if(exp.test(str)){
                alert("Phone Number is Valid");
            }else{
                alert("Invalid Phone Number");
            }
            break;

        case 'email':
            exp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            str = userInput;

            if(exp.test(str)){
                alert("Email is Valid");
            }else{
                alert("Invalid Email");
            }
            break;

    }
}