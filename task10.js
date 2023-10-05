var temp = +prompt("Please Enter Temperature");

if(temp > 40){
    document.write("It is too hot outside");
}

else if(temp <= 40 && temp >= 30){
    document.write("The weather today is normal");
}

else if(temp < 30 && temp > 20){
    document.write("Today's weather is cool");
}

else if(temp <=20 && temp >10){
    document.write("OMG! Today's weather is so cool")
}

else{
    document.write("It is chilled weather today");
}