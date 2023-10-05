var physics = +prompt("Please enter marks for Physics");
var chemistry = +prompt("Please enter marks for Chemistry");
var mathematics = +prompt("Please enter marks for Mathematics");
var obtMarks = physics + chemistry + mathematics;
var totMarks = +prompt("Please enter Total Marks");
var percentage = obtMarks * 100 / totMarks;
var grade;
var remarks;
document.write("Total Marks: " + totMarks + "<br>");
document.write("Marks Obtained: " + obtMarks + "<br>");
document.write("Percentage: " + percentage + "%<br>");

if(percentage >= 80){
    grade = "A-One";
    remarks= "Excellent";
}

else if(percentage >=70 && percentage <80){
    grade = "A";
    remarks="Good";
}
else if(percentage >=60 && percentage <70){
    grade = "B";
    remarks="You need to improve";
}

else if(percentage <60){
    grade = "Fail";
    remarks = "Sorry";
}

document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks);