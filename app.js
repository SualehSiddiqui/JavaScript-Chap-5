// Chap #5
// Question #1
// var num1 = 5
// var num2 = 18
// var sum = num1 + num2
// document.write("Sum of "+ num1 + " and " + num2 + " is " + sum);

// Question #2
// var num1
// var num2
// num1 = 14
// num2 = 8
// var sub = num1 - num2
// document.write("Subtraction of " + num1 + " and " + num2 + " is " + sub);
// num1 = 5
// num2 = 6
// var multi = num1 * num2
// document.write("<br />Multiplication of " + num1 + " and " + num2 + " is " + multi );
// num1 = 24
// num2 = 4
// var div = num1 / num2
// document.write("<br />Division of " + num1 + " and " + num2 + " is " + div);
// num1 = 36
// num2 = 8
// var mod = num1 % num2
// document.write("<br />Modulus of " + num1 + " and " + num2 + " is " + mod);

// Question #3
// var num1
// document.write("Value after variable declaration is: "+ num1);
// num1 = 5
// document.write("<br />Initial value: " + num1);
// ++num1
// document.write("<br />Value after increment is: " +num1);
// num1 = num1 + 7
// document.write("<br />Value after addition is: " +num1);
// --num1
// document.write("<br />Value after increment is: " +num1);
// var num1 = num1 % 3
// document.write("<br />The reminder is: " +num1);

// Question #4
// var tick = 600
// var numTick = 5
// var fiveTick = tick*numTick
// document.write("Cost of buying "+numTick+" is: "+ fiveTick + "PKR");

// Question #5
// var tableNum = 4
// var count =0
// document.write("<h1>Table of "+ tableNum +"</h1>");
// document.write("<h3>"+tableNum + " x " + ++count + " = "+ tableNum*count + "</h3>");
// document.write("<h3>"+tableNum + " x " + ++count + " = "+ tableNum*count + "</h3>");
// document.write("<h3>"+tableNum + " x " + ++count + " = "+ tableNum*count + "</h3>");
// document.write("<h3>"+tableNum + " x " + ++count + " = "+ tableNum*count + "</h3>");
// document.write("<h3>"+tableNum + " x " + ++count + " = "+ tableNum*count + "</h3>");
// document.write("<h3>"+tableNum + " x " + ++count + " = "+ tableNum*count + "</h3>");
// document.write("<h3>"+tableNum + " x " + ++count + " = "+ tableNum*count + "</h3>");
// document.write("<h3>"+tableNum + " x " + ++count + " = "+ tableNum*count + "</h3>");
// document.write("<h3>"+tableNum + " x " + ++count + " = "+ tableNum*count + "</h3>");
// document.write("<h3>"+tableNum + " x " + ++count + " = "+ tableNum*count + "</h3>");

// Question #6
// var C
// var F
// C = 31
// F = (C*9/5)+32
// document.write( C + "&#176 C is "+F+ "&#176 F")

// F = 79
// C =(F-32)*5/9
// document.write("<br />"+ F + "&#176 C is "+ C + "&#176 F")

// Question #7
// var priceOfOne = 400
// var priceOfTwo = 550
// var quanOfOne = 3
// var quanOfTwo = 2
// var shipChar = 150

// document.write("Price of item 1 is: " + priceOfOne);
// document.write("<br />Quantity of item 1 is: " + quanOfOne);
// document.write("<br />Price of item 2 is: " + priceOfTwo);
// document.write("<br />Quantity of item 2 is: " + quanOfTwo);
// document.write("<br />Shipping charges: " + shipChar);

// document.write("<br />Total cost of your order is " + (shipChar + (priceOfOne * quanOfOne) + (priceOfTwo * quanOfTwo)));

// Question #8
// var totMrk = 800
// var obtnMrk = 760

// document.write("<h2>Marks Sheet</h2>");
// document.write("Total Marks: " + totMrk);
// document.write("<br />Obtain Marks: " + obtnMrk);
// document.write("<br />Percentage: " +(obtnMrk/totMrk*100) + "%");

// Question #9
// var $ = 10
// var saudRiyal = 25

// document.write("<h2>Currency to PKR</h2>");
// document.write("Total Currency in PKR: " +((10*104.80)+(25*28)));

// Question #10
// var num = 25

// document.write("Airthmetic Calculations: " + ((num+5)*10)/2);

// Question #11
// var curYear = 2023
// var birYear = 2006

// document.write("Current Year" +curYear);
// document.write("<br />Birth Year" +birYear);
// document.write("<br />Your Age is: " + (curYear-birYear));

// Question #12
// var rad = 15
// var pie = 3.142
// document.write("Radius of a circle:" +rad);
// document.write("<br />The circumference is: " +2*pie*rad);
// document.write("<br />The area is: " + pie*rad*rad);

// Question #12
var snack = "Lays"
var age = 17
var maxAge= 55
var esmAmo = 2
var lifTimSnck= (maxAge-age)*esmAmo

document.write("<h2>The Lifetime Supply Calculator:</h2>");
document.write("<br />Favourite Snack: " +snack);
document.write("<br />Current Age: " +age);
document.write("<br />Maximum Age: " +maxAge);
document.write("<br />Amount Of Snack per day: " +esmAmo);
document.write("<br />You Will Need " + lifTimSnck + " " + snack + " to last you until the ripe old age " + maxAge);