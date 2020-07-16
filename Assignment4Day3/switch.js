function marksgrade()
{
grade = document.form1.text1.value;
switch (grade)
{
case 'A+':
console.log("Marks are greater than 90 and grade is A+");
break;
case 'A':
console.log("Marks are between 80 and 90 and grade is A");
break;
case 'B+':
console.log("Marks are between 70 and 80 and grade is B+");
break;
case 'B':
console.log("Marks are between 60 and 70 and grade is B");
break;
case 'C':
console.log("Marks are less than 60 and grade is c");
break;
default:
console.log("Wrong grade.........");
}
}
