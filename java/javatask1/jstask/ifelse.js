//1 
var a=20
if(a%2==0){
    console.log("a is even")
}else{
    console.log("a is odd")
}
//2
var a=5
var b=typeof(a)
console.log(b)
if(b=="number"){
    console.log("a is a number")
}else{
    console.log("a is not a number")
}
//3
var a=250
var b=200
if(a>b){
    console.log("a is greater")
}else{
    console.log("b is greater")
}
//4
var a=25
var b=36
var c=160

if(a>b && a>c){
    console.log("a is greater")
}
else if(b>a && b>c){
    console.log("b is greater")
}
else{
    console.log("c is greater")
}
//5
const side1=60
const side2=60
const side3=50
if(side1==side2==side3){
    console.log("Equilateral Triangle")
}
else if(side1==side2||side2==side3){
    console.log("Isoceles Triangle")
}else{
    console.log(" Scalene Triangle")
}
//6
let num = 500;
let minRange = 10;
let maxRange = 100;

if (num >= minRange && num <= maxRange) {
  console.log(num + " is within the range of " + minRange + " and " + maxRange);
} else {
  console.log(num + " is outside the range of " + minRange + " and " + maxRange);
}
//7
let num1 = 10;
let num2 = 5;
let operation = "subtract"; 
if (operation === "add") {
    console.log(num1 + num2);
} else if (operation === "subtract") {
    console.log(num1 - num2);
} else if (operation === "multiply") {
    console.log(num1 * num2);
} else if (operation === "divide") {
    console.log(num1 / num2);
} else if (operation === "modulus") {
    console.log(num1 % num2);
}else{
    console.log("Invalid operation")
}
//8
var year=2020

if(year%4==0 &&year%100!==0){
    console.log("leap year")
}
else if(year%400==0){
    console.log("leap year")
}
else{
    console.log("not a leap year")
}
//9
var marks=89
if(marks>=90 && marks<=100){
    console.log("S grade")
}else if(marks>=80 && marks<=90){
    console.log("A grade")
}else if(marks>=70 && marks<=80){
    console.log("B grade")
}else if(marks>=60 && marks<=70){
    console.log("C grade")
}else if(marks>=50 && marks<=60){
    console.log("D grade")
}else if(marks>=40 && marks<=50){
    console.log("E grade")
}else if(marks>=0 && marks<=40){
    console.log("Student has failed" )
}else{
    console.log("Invalid marks")
}
//10
let month = 2;       
let year = 2024;     

if (month < 1 || month > 12) {
    console.log("Invalid month");
} else if (month === 2) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("29 days");
    } else {
        console.log("28 days");
    }
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log("30 days");
} else {
    console.log("31 days");
}