
//---------------- Chapter 1-------
// // Question-1 Write a script to greet your website visitor using JS alert box.

alert("Wellcome to JavaScript!");

// //Question-2 Write a script to display following message on your web page: 

alert("Error! Please enter a valid password");

// //Question-3 Write a script to display following message on your web page:

alert("Welcome to JS land..  \nHappy Coding");

//Question-4 Write a script to display following messages in sequence:

alert("Welcome to JS land");
alert("Happy Coding!");

//Question 5

console.log("Hello..... i can run JS through me web browser console ");

// ----------- Chapter 2 Variable for String ----------

// Question-1. Declare a variable called username.
var username;

// Question-2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Affan Ahmed Dahar";

//Question- 3. Write script to
// a) Declare a JS variable, titled message.
var message;

// b) Assign “Hello World” to variable message

message = "Hello World";

// c) Display the message in alert box.

alert(message);

// Question-4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var name = "Affan Ahmed Dahar";
var age = 22;
var course = "Certified Mobile Application Development";
alert(name);
alert(age + " years old");
alert(course);

// Question-5. Write a script to display the following alert using one JS variable:
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);

// Question-6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com).

var email = "daharaffan@gmail.com";
alert("My email address is " + email);

// Question-7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”.
// Display the following message in an alert box:
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book " + book);

// Question-8. Write a script to display this in browser through JS
document.write("Yah! I can write HTML content through JavaScript");

// Question-9. Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”
var symbol = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(symbol);





// ----------- Chapter 3 ----------

// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = 22;
alert("I am " + age + " years old");

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You have visited this site N times”.
var Visits = 14;
alert("You have visited this site " + Visits + " times.");

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear = 1997;
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is number" + "<br>");

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
var visitorName = "John Doe";

// b. Product title
var productTitle = "T-shirt(s)";

// c. Quantity i.e. how many products a visitor wants to order
var quantity = 5;

// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

document.write(visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store")




// ----------- Chapter 4 ----------

// Question-1. Declare 3 variables in one statement
var name, age, gender;

// Question-2. Declare 5 legal & 5 illegal variable names.
//Legal Variable
var name;
var age;
var $department
var first_name;
var abc123;

//Illegal Variable
// var 1stnumber;
// var fist name;
// var @name;
// var for;
// var false;

// Question-3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
document.write("<h1>" + "Rules for naming JS variables" + "</h1>");

// b) Variable names can only contain ______, ______, ______ and ______.For example $my_1stVariable
document.write("Variable names can only contain numbers, $ and _. For example: $my_1stVariable." + "<br/>");

// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
document.write("Variable must begin with a , $ , _ or letter. For example: $name, _name or name" + "<br/>");

// d) Variable names are case _________
document.write(" Variable names are case sensitive" + "<br/>");

// e) Variable names should not be JS _________
document.write("Variable names should not be JS keywords" + "<br/>");




// ----------- Chapter 5 ----------

// Qustion-1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var Num1 = +prompt("Enter first number");
var Num2 = +prompt("Enter second number");
var add = Num1 + Num2;
document.write("Sum of " + Num1 + " and " + Num2 + " is " + add + "<br>");

// Qustion-2. Repeat task1 for subtraction, multiplication, division & modulus.
// Subtraction
var sub = Num1 - Num2;
document.write("Subtraction of " + Num1 + " and " + Num2 + " is " + sub + "<br>");
// Multiplication
var mul = Num1 * Num2;
document.write("Multiplication of " + Num1 + " and " + Num2 + " is " + mul + "<br>");
// Division
var div = Num1 / Num2;
document.write("Division of " + Num1 + " and " + Num2 + " is " + div + "<br>");
// Modulus
var mod = Num1 % Num2;
document.write("Modulus of " + firstNum + " and " + secondNum + " is " + mod + "<br>");

// Qustion-3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
var number;
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write("Value after variable declaration is: " + number + "<br>");
// c. Initialize the variable with some number.
number = 5;
// d. Show the value of variable in your browser like “Initial value: 5”.
document.write("Initial value: " + number + "<br>");
// e. Increment the variable.
number++;
// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write("Value after increment is: " + number + "<br>");
// g. Add 7 to the variable.
number += 7;
// h. Show the value of variable in your browser like “Value after addition is: 13”.
document.write("Value after addition is: " + number + "<br>");
// i. Decrement the variable.
number--;
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("Value after decrement is: " + number + "<br>");
// k. Show the remainder after dividing the variable’s value by 3.
number = number % 3;
// l. Output : “The remainder is : 0”.
document.write("The remainder is: " + number + "<br>");

// Qustion-4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable &
// calculate the cost of buying 5 tickets to a movie. Example output:
var ticketPrice = 600;
var total = ticketPrice * 5;
document.write("The total cost to buy 5 tickets to a movie is " + total + "PKR" + "<br>");

// Qustion-5. Write a script to display multiplication table of any number in your browser. E.g
var tableNumber = 5;
var i = 0;
document.write("Table of " + tableNumber + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>");

// Qustion-6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
var celsius = 25;
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
var fahrenheit = (celsius * 9 / 5) + 32;
// c. Now store a Fahrenheit temperature into a variable.
fahrenheit = 77;
// d. Convert it to Celsius & output “NNoF is NNoC”.
celsius = (fahrenheit - 32) * 5 / 9;
document.write(celsius + "C is " + fahrenheit + "F" + "<br/>");
document.write(fahrenheit + "F is " + celsius + "C" + "<br/>");

// Qustion-7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
var itemprice1 = 150;
// b. Price of item 2
var itemprice2 = 350;
// c. Ordered quantity of item 1
var quantityItem1 = 2;
// d. Ordered Quantity of item 2
var quantityItem2 = 4;
// e. Shipping charges
var shippingCharges = 100;
// Compute the total cost & show the receipt in your browser.
var total = (itemprice1 * quantityItem1) + (itemprice2 * quantityItem2) + shippingCharges;
document.write("Price of Item 1 is " + itemprice1 + "<br/>");
document.write("Quantity of Item 1 is " + quantityItem1 + "<br/>");
document.write("Price of Item 2 is " + itemprice2 + "<br/>");
document.write("Quantity of Item 2 is " + quantityItem2 + "<br/>");
document.write("Shipping Charges " + shippingCharges + "<br/>");
document.write("<br/>");
document.write("Total cost of your order is " + total);

// Qustion-8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
var totalMarks = 1100;
var marksObtained = 910;
var percentage = (marksObtained / totalMarks) * 100;

document.write("<h3>" + "Marks Sheet" + "</h3>");
document.write("Total Marks: " + totalMarks + "<br/>");
document.write("Marks Obtained: " + marksObtained + "<br/>");
document.write("Percentage: " + percentage);

// Qustion-9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
var pkr = (10 * 104.80) + (25 * 28);
document.write("<h3>" + "Currency Conversion in PKR" + "</h3>");
document.write("Total Currency in PKR: " + pkr);

// Qustion-10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

num = (((num + 5) * 10) / 2);
document.write("<h3>" + "Arithmetic Operation in single statement" + "</h3>");
document.write("Output: " + num);

// Qustion-11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
var year = 2020;
// b. Store their birth year in a variable.
var birthYear = 1996;
// c. Calculate their 2 possible ages based on the stored values.
var age = year - birthYear;
// Output them to the screen like so: “They are either NN or NN years old”.
document.write("<h3>" + "Age Calculator" + "</h3>");
document.write("Current Year: " + year + "<br/>");
document.write("Birth Year: " + birthYear + "<br/>");
document.write("Your age is: " + age);

// Qustion-12. The Geometrizer: Calculate properties of a circle.
document.write("<h3>" + "The Geometrizer" + "</h3>");
// a. Store a radius into a variable.
var radius = 7;
document.write("Radius of a Circle: " + radius + "<br/>");
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
var circumference = 2 * 3.142 * radius;
document.write("The circumference is: " + circumference + "<br/>");
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var area = 3.142 * radius * radius;
document.write("The area is: " + area);

// Qustion-13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?Wonder no more.
document.write("<h3>" + "The Lifetime Supply Calculator" + "</h3>");
// a. Store your favorite snack into a variable
var snack = "Sandwich";
// b. Store your current age into a variable.
var age = 22;
// c. Store a maximum age into a variable.
var maxAge = 60;
// d. Store an estimated amount per day (as a number).
var amount = 2;
// e. Calculate how many would you eat total for the rest of your life.
var eat = (60 - 22) * (365 * 2);
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
document.write("Favorite Snack: " + snack + "<br/>");
document.write("Current Age: " + age + "<br/>");
document.write("Estimated Maximum Age: " + maxAge + "<br/>");
document.write("Amount of snacks per day: " + amount + "<br/>");
document.write("You will need " + eat + " to last you until the ripe old age of " + maxAge);


//--------- Chapter 6-9 --------

// Question-1 Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

//Taking input from user
var a = + prompt("Enter a value ");
document.write("Result:" + "<br>")
document.write("The value a is :" + " " + a + "<br>");
document.write("......................." + "<br>")
document.write("<br>")

//pre increment
document.write("The value ++a is :" + " " + ++a + "<br>");
document.write("now the value a is :" + " " + a + "<br>");
document.write("<br>")

//post increment
document.write("The value a++ is :" + " " + a++ + "<br>");
document.write("now the value a is :" + " " + a + "<br>");
document.write("<br>")

//pre decrement
document.write("The value --a is :" + " " + --a + "<br>");
document.write("now the value a is :" + " " + a + "<br>");
document.write("<br>")

//post decrement
document.write("The value a-- is :" + " " + a-- + "<br>");
document.write("now the value a is :" + " " + a + "<br>");

// Question-2  What will be the output in variables a, b & result after execution of the following script: 

var a = 2, b = 1;
document.write("The value of a is " + a + "<br/>");
document.write("The value of b is " + b + "<br/>");
var result = --a - --b + ++b + b--;
document.write("The result is " + result + "<br/>" + "<br/>");

//explain the output at each stage
document.write("Output explanation" + "<br>")
// --a the value of a is decreasing before the output is showing 
// --1 

// --a - --b here pre decrement is happening in value a and b  
// --1 - --0


// --a - --b + ++b + b--
// --1 - --0 + ++1 + 1--   

// document.write("a = 2, b = 1" + "<br/>");
// document.write("--a  -  --b  +  ++b  +  b--"  + "<br/>");
// document.write("--2  -  --1  +  ++1  +  1--" + "<br/>");
// document.write("1  -  0  +  1  +  1" + "<br/>");
// document.write(" 1 + 1 + 1 " + "<br/>");
// document.write("3" + "<br/>");
// document.write("<br/>" + "<br/>");


// Question-3 Write a program that takes input a name from user & greet the user. 

var name = prompt("Enter your name");
document.write("Hello" + " " + name);
document.write("<br>" + "<br>")

// Question-5 Write a program to take input a number from user & display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5 should be displayed by default.
var num = 5, count = 0;
num = +prompt("Enter Number for Table Multiplication: ");
document.write(num + " x " + ++count + " = " + (num * count) + "<br/>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br/>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br/>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br/>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br/>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br/>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br/>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br/>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br/>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br/>");


// Question-6. Marksheet
document.write("<h3>" + "Marksheet" + "</h3>");

// a) Take three subjects name from user and store them in 3 different variables. 
subjectName1 = prompt("Enter Name of Subject 1: ");
subjectName2 = prompt("Enter Name of Subject 2: ");
subjectName3 = prompt("Enter Name of Subject 3: ");

// b) Total marks for each subject is 100, store it in another variable.
var totalMarks = 300;

// c) Take obtained marks for first subject from user and stored it in different variable.
subjectMarks1 = +prompt("Enter Marks of " + subjectName1);

// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
subjectMarks2 = +prompt("Enter Marks of " + subjectName2);
subjectMarks3 = +prompt("Enter Marks of " + subjectName3);

// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
var obtainedMarks = (subjectMarks1 + subjectMarks2 + subjectMarks3);
var percentage = (obtainedMarks / totalMarks) * 100;
percentage = percentage.toFixed(2);
var percentage1 = (subjectMarks1 / 100) * 100;
var percentage2 = (subjectMarks2 / 100) * 100;
var percentage3 = (subjectMarks3 / 100) * 100;

document.write("<Table>");

document.write("<tr>");
document.write("<th>" + "Subject" + "</th>");
document.write("<th>" + "Total Marks" + "</th>");
document.write("<th>" + "Obtained Marks" + "</th>");
document.write("<th>" + "Percentage" + "</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subjectName1 + "</td>");
document.write("<td>" + 100 + "</td>");
document.write("<td>" + subjectMarks1 + "</td>");
document.write("<td>" + percentage1 + "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subjectName2 + "</td>");
document.write("<td>" + 100 + "</td>");
document.write("<td>" + subjectMarks2 + "</td>");
document.write("<td>" + percentage2 + "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subjectName3 + "</td>");
document.write("<td>" + 100 + "</td>");
document.write("<td>" + subjectMarks3 + "</td>");
document.write("<td>" + percentage3 + "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<th>" + "</th>");
document.write("<th>" + 300 + "</th>");
document.write("<th>" + obtainedMarks + "</th>");
document.write("<th>" + percentage + "%" + "</th>");
document.write("</tr>");


document.write("</Table>");




// --------------- Chapter 9-11 ------

// Question-1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights” 
var city = prompt("Enter City Name: ");
if (city === "Karachi") {
    alert("Welcome to city of lights");
}



// Question-2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
var gender = prompt("Enter Your Gender");
if (gender === "male") {
    alert("Good Morning Sir");
}
if (gender === "female") {
    alert("Good Morning Maam");
}



// Question-3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
var color = prompt("Enter the color of traffic road signal: \n Red, Yellow or Green");
if (color === "Red") {
    alert("Must Stop");
}
if (color === "Yellow") {
    alert("Ready to Move");
}
if (color === "Green") {
    alert("Move Now");
}



// Question-4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
var fuel = +prompt("Enter your remaining fuel in car in litres: ");
if (fuel < 0.25) {
    alert("Please refill your fuel in car");
}




// Question-5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

//  A
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// B
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

//  C
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}

if (++c < 14) {
    alert("condition 3 is true");
}

if (c === 14) {
    alert("condition 4 is true");
}

//  D
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

//  E
if (true) {
    alert("True");
}

if (false) {
    alert("False");
}

//  F
if ("car" < "cat") {
    alert("car is smaller than cat");
}



// Question-6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table: 
var obtainedMarks = +prompt("Enter Obtained Marks in three subjects: ");
var totalMarks = +prompt("Enter total Marks: ");
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h3>" + "Mark Sheet" + "<h3>");
document.write("Total Marks: " + totalMarks + "</br>");
document.write("Marks Obtained: " + obtainedMarks + "</br>");
document.write("Percentage: " + percentage + "</br>");

if (percentage >= 80 && percentage < 100) {
    document.write("Grade: A-one" + "<br>");
    document.write("Remarks: Excellent" + "<br>");
}

else if (percentage >= 70 && percentage < 80) {
    document.write("Grade: A" + "<br>");
    document.write("Remarks: Good" + "<br>");
}

else if (percentage >= 60 && percentage < 70) {
    document.write("Grade: B" + "<br>");
    document.write("Remarks: You need to improve" + "<br>");
}

else if (percentage < 60) {
    document.write("Grade: Fail" + "<br>");
    document.write("Remarks: Sorry" + "<br>");
}

else {
    document.write("Invalid Input" + "<br>");
}


//Question-7.  Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. 
var secret = 5;
var guess = +prompt("Guess the Number: \nBetween 1-10");

// a. If user guesses the same number, show “Bingo! Correct answer”.
if (secret === guess) {
    alert("Bingo! Correct Answer: ");
}

// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
else if (++secret === guess) {
    alert("Close enough to the correct answer");
}

else {
    alert("Sorry Wrong Guess");
}



// Question-8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
var num = +prompt("Enter number to check number is divisible by 3 or not: ");
if (num % 3 === 0) {
    alert(num + " is divisble by 3");
}
else {
    alert(num + " is not divisible by 3");
}



// Question-9. Write a program that checks whether the given input is an even number or an odd number. 
var num = +prompt("Enter number to check number is even or odd");
if (num % 2 === 0) {
    alert(num + " is even number");
}
else {
    alert(num + " is odd number");
}



// Quesion-10. Write a program that takes temperature as input and shows a message based on following criteria
var temperature = +prompt("Enter your city temperature: ");

// a. T > 40 then “It is too hot outside.” 
if (temperature > 40) {
    alert("It is too hot outside");
}

// b. T > 30 then “The Weather today is Normal.” 
else if (temperature > 30) {
    alert("The weather today is Normal");
}

// c. T > 20 then “Today’s Weather is cool.” 
else if (temperature > 20) {
    alert("Today's Weather is cool");
}

// d. T > 10 then “OMG! Today’s weather is so Cool.”
else {
    alert("OMG! Today's weather is so Cool");
}



// Question-11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: 
// a. First number 
var firstNumber = +prompt("Enter First Number: ");

// b. Second number 
var secondNumber = +prompt("Enter Second Number: ");

// c. Operation (+, -, *, /, %) 
var operator = prompt("Choose your operator: \n( + , - , * , / , % )");

document.write("<h3>" + "Calculator" + "</h3>");
document.write("First Number: " + firstNumber + "</br>");
document.write("Second Number: " + secondNumber + "</br>");

// Compute & show the calculated result to user. 
if (operator === "+") {
    document.write("Result: " + firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber));
}

else if (operator === "-") {
    document.write("Result: " + firstNumber + " - " + secondNumber + " = " + (firstNumber - secondNumber));
}

else if (operator === "*") {
    document.write("Result: " + firstNumber + " x " + secondNumber + " = " + (firstNumber * secondNumber));
}

else if (operator === "/") {
    document.write("Result: " + firstNumber + " / " + secondNumber + " = " + (firstNumber / secondNumber));
}

else if (operator === "%") {
    document.write("Result: " + firstNumber + " % " + secondNumber + " remainder is: " + (firstNumber % secondNumber));
}

else {
    document.write("Wrong Input");
}


//-------- Chapter 12-13--------


// Question-1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter.
// (Hint: ASCII codes:- A=65, Z=90, a=97, z=122). 

var character = prompt("Please enter your character to checks whether the given input is a number, uppercase letter or lower case letter");
var value = character.charCodeAt(0);

//Checking for Number
if (value >= 48 && value <= 57) {
    alert(character + " is number");
}

//Checking for UpperCase Letters
else if (value >= 65 && value <= 90) {
    alert(character + " is Uppercase Letter");
}

//Checking for LowerCase Letters
else if (value >= 97 && value <= 122) {
    alert(character + " is Lowercase Letter");
}

else {
    alert("Given input is not a number or letter");
}



//Question-2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
var firstNumber = +prompt("Enter First Number: ");
var secondNumber = +prompt("Enter Second Number: ");

if (firstNumber > secondNumber) {
    alert(firstNumber + " is larger than " + secondNumber);
}

else if (firstNumber < secondNumber) {
    alert(secondNumber + " is larger than " + firstNumber);
}

else {
    alert(firstNumber + " and " + secondNumber + " both are eqaul");
}



// Question-3. Write a program that takes input a number from user & state whether the number is positive, negative or zero. 
var num = +prompt("Enter a number to check its state: ");

if (num > 0) {
    alert(num + " is Positive");
}

else if (num < 0) {
    alert(num + " is Negative");
}

else {
    alert("The number is " + num);
}

//Question-4.Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
var character = prompt("Enter character to check vowel or not");

if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
    alert(character + " is vowel");
}

else if (character === "A" || character === "E" || character === "I" || character === "O" || character === "U") {
    alert(character + " is vowel");
}

else {
    alert(character + " is not vowel");
}



//Question-5. Write a program that 

// a. Store correct password in a JS variable.
var password = "affyozil";

// b. Store correct password in a JS variable.
var check = prompt("Enter your password: ");

// c.  Validate the two passwords: 
// i. Check if user has entered password. If not, then give message “ Please enter your password”  
if (check === "") {
    check = prompt("Please enter your password");
}

// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise. 
if (check === password) {
    alert("Correct! The password you entered matches the original password");
}
else {
    alert("Incorrect Password");
}



// Question-6. This if/else statement does not work. Try to fix it: 
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
//     greeting = "Good day"; 
// else
// greeting = "Good evening"; 
// }

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    document.write(greeting);
}
else {
    greeting = "Good evening";
    document.write(greeting);
}



// Question-7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements 

var time = +prompt("Please enter 24 hours clock format time \nlike: 1900 = 7pm.");

if (time >= 0000 && time < 1200) {
    alert("Good Morning");
}

else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon");
}

else if (time >= 1700 && time < 2100) {
    alert("Good Evening");
}

else if (time >= 2100 && time <= 2359) {
    alert("Good Night");
}

else {
    alert("Invalid Input");
}

//-------- Chapter 14-16--------

// Question-1. Declare an empty array using JS literal notation to store student names in future. 
var students = [];



// Question-2. Declare an empty array using JS object notation to store student names in future. 
var students = new Array();



// Question-3. Declare and initialize a strings array.
var colors = ["Purple", "Green", "Red", "Purple", "Blue"];
document.write("String Array: " + colors + "<br/>" + "<br/>");



// Question-4.  Declare and initialize a numbers array. 
var numbers = [155, 205, 288, 233, 264];
document.write("Number Array: " + numbers + "<br/>" + "<br/>" + "<br/>");



// Question-5.  Declare and initialize a boolean array. 
var boolean1 = [true, false, false, true];
document.write("Boolean Array: " + boolean1 + "<br/>" + "<br/>" + "<br/>");



// Question-6. Declare and initialize a mixed array. 
var data = ["Affan", 30, true];
document.write("Mixed Array: " + data + "<br/>" + "<br/>" + "<br/>");



// Question-7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PHD"];
var count = 0;
var i = 0;

document.write("Qualification" + "<br/>" + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>" + "<br/>" + "<br/>");



// Question-8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students like: 
var studentNames = ["Affan", "Ali", "Saeed"];
var studentMarks = [467, 475, 389];
var index = 0;

document.write("Score of " + studentNames[index] + " is " + studentMarks[index] + ". Percentage: " + ((studentMarks[index++] / 500) * 100) + "<br/>");
document.write("Score of " + studentNames[index] + " is " + studentMarks[index] + ". Percentage: " + ((studentMarks[index++] / 500) * 100) + "<br/>");
document.write("Score of " + studentNames[index] + " is " + studentMarks[index] + ". Percentage: " + ((studentMarks[index++] / 500) * 100) + "<br/>");
document.write("<br/>" + "<br/>");



// Question-9. Initialize an array with color names. Display the array elements in your browser.
var colorNames = [];

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. 
var input = prompt("Which color do you wants to add to  beginning the array?");
colorNames.push(input);

document.write("Updated array: " + colorNames + "<br/>");

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. 
input = prompt("What color you wants to add to the end?");
colorNames.push(input);

document.write("Updated array: " + colorNames + "<br/>");

// c. Add two more color to the beginning of the array. 
input = prompt("Add two more color to the beginning/nEnter first color: ");
colorNames.unshift(input);
input = prompt("Add two more color to the beginning/nEnter second color: ");
colorNames.unshift(input);

document.write("Updated array: " + colorNames + "<br/>");

// d. Delete the first color in the array. 
colorNames.shift();

document.write("Updated array: " + colorNames + "<br/>");

// e. Delete the last color in the array
colorNames.pop();

document.write("Updated array: " + colorNames + "<br/>");

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.
var indexNo = +prompt("Which index you wants to add a color: ");
input = prompt("Please enter your color name: ");
colorNames.splice(indexNo, 0, input);

document.write("Updated array: " + colorNames + "<br/>");

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete
indexNo = +prompt("At which index you wants to delete a color: ");
var deleteCount = +prompt("how many colors you want to delete ");
colorNames.splice(indexNo, deleteCount);

document.write("Updated array: " + colorNames + "<br/>");



// Question-10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. 
var studentMarks = [45, 98, 34, 53, 67, 88];
document.write("Score of Students: " + studentMarks + "<br/>");
document.write("Ordered Score of Students: " + studentMarks.sort() + "<br/>" + "<br/>" + "<br/>");



// Question-11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. 
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar", "Multan"];
document.write("Cities List:" + "<br/>" + cities + "<br/>" + "<br/>");
var selectedCities = [];
selectedCities = cities.slice(2, 5);
document.write("Selected cities List:" + "<br/>" + selectedCities + "<br/>" + "<br/>" + "<br/>");



// Question-12. Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”];
var arr = ["This", "is", "my", "cat"];
document.write("Array:" + "<br/>" + arr + "<br/>" + "<br/>");
var joinarr = arr.join(" ");
document.write("String:" + "<br/>" + joinarr + "<br/>" + "<br/>" + "<br/>");



// Question-13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
var out;
document.write("Devices:" + "<br/>" + devices + "<br/>" + "<br/>");

out = devices.shift();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.shift();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.shift();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.shift();
document.write("Out:" + "<br/>" + out + "<br/>" + "<br/>" + "<br/>");



// Question-14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out) 
var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
var out;
document.write("Devices:" + "<br/>" + devices + "<br/>" + "<br/>");

out = devices.pop();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.pop();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.pop();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.pop();
document.write("Out:" + "<br/>" + out + "<br/>" + "<br/>" + "<br/>");



// Question-15.  Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method: 
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
var index = 0;
document.write("<select>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("</select>");

// -------- Chapter 19-20 --------
// Quetion-1. Declare and initialize an empty multidimensional array.(Array of arrays)
var arr = [];

// Quetion-2. Declare and initialize a multidimensional array representing the following matrix:
var arr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]];

// Quetion-3. Write a program to print numeric counting from 1 to 10.
for (i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

// Quetion-4. Write a program to print multiplication table of any number using for loop.
// Table number & length should be taken as an input from user.

document.write("Multiplication of a no given by user " + "<br>")

var no = +prompt("enter the  number for multiplication");
var len = +prompt("enter the  length for multiplicati0n table");
var i;

document.write("Multiplication Table of" + "" + no + "<br>");
document.write("Length" + " " + len);
for (i = 1; i <= len; i++) {
    document.write(no + " * " + i + " = " + no * i + "<br>");
}

// Quetion-5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”];
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}
for (j = 0; j < fruits.length; j++) {
    document.write("Element at index " + j + " is " + fruits[i] + "<br>");
}


// Quetion-6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write("<h3>" + "Counting" + "</h3>")
for (i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write("<h3>" + "Reverse Counting" + "</h3>")
for (i = 10; i > 0; i--) {
    document.write(i + ", ");
}
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.write("<h3>" + "Even" + "</h3>")
for (i = 0; i <= 20; i = i + 2) {
    document.write(i + ", ");
}
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
document.write("<h3>" + "Odd" + "</h3>")
for (i = 1; i <= 20; i = i + 2) {
    document.write(i + ", ");
}
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<h3>" + "Series" + "</h3>")
for (i = 2; i <= 20; i = i + 2) {
    document.write(i + "k, ");
}

// Quetion-7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not. Example:
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var order = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
for (i = 0; i < arr.length; i++) {
    if (order === arr[i]) {
        document.write(arr[i] + " is available at index " + i + " in our bakery");
        break;
    }
    else {
        document.write("We are sorry." + order + " is not avaible in our bakery");
        break;
    }
}

// Quetion-8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].
var arr = [24, 53, 78, 91, 12];
var largestNumber = arr[0];
for (i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
        largestNumber = arr[i];
    }
}
document.write("Array items: " + arr + "<br>");
document.write("The largest number is " + largestNumber);

// Quetion-9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]
var arr = [24, 53, 78, 91, 12];
var smallestNumber = arr[0];
for (i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNumber) {
        smallestNumber = arr[i];
    }
}
document.write("Array items: " + arr + "<br>");
document.write("The smallest number is " + smallestNumber);

// Quetion-10. Write a program to print multiples of 5 ranging 1 to 100.
for (i = 5; i <= 100; i = i + 5) {
    document.write(i + ", ");
}
