var firstNum = +prompt("Please enter first number");
var secondNum = +prompt("Please enter Second Number");
var opt = prompt("Please Enter Math Operator");
var result;

if(opt==="+"){
    result = firstNum + secondNum;
}
else if (opt === "-"){
    result = firstNum - secondNum;
}
else if (opt === "*"){
    result = firstNum * secondNum;
}
else if (opt === "/"){
    result = firstNum / secondNum;
}
else if (opt === "%"){
    result = firstNum % secondNum;
}

else{
    document.write("Please enter correct number");
}

document.write(result)
