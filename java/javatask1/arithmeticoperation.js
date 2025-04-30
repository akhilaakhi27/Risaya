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