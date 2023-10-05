var signalLight = prompt("Enter a Signal Light i.e. Red, Green or Yellow");

if(signalLight === "red" || signalLight === "Red"){
    document.write("Must Stop at " + signalLight + " light")
}
else if(signalLight === "green" || signalLight === "Green"){
    document.write("You can move at " + signalLight + " light");
}

else if(signalLight==="yellow" || signalLight==="Yellow"){
    document.write("Ready to move at " + signalLight + " light");
}

else{
    document.write("Please enter a correct light color for signal!");
}