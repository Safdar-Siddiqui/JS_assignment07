var Fuel = +prompt("How much fuel is remaining in your car?");
if(Fuel < 0.25){

    document.write("You have left " + Fuel +  " liters fuel in your car. Please Refill now");
}
else{
    document.write("Enjoy traveling");
}