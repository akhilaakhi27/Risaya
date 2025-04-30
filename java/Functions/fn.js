//normal function
let a=10
let b=20
function sum(){
    return a+b
}
console.log(sum())
//function declared by expression
let sum1=function(){
    console.log(a+b)
}
sum1()
//arrow function
// let sum2=()=>{
//     console.log(a+b)
// }
// sum2()

// (OR) let sum2=()=>a+b
// console.log(sum2())

let sum2=(a,b)=>a+b
console.log(sum2(20,30))

//FUNCTIONS PARAMETES AND ARGUMENTS

//DEFAULT PARAMETERS
function defaultParameter(a,b){
    console.log(a,b)
    a=(a===undefined)?10:a
    b=(b===undefined)?10:b
    console.log(a,b,a+b)
    
}
console.log(defaultParameter())

//es6
function add(a=0,b=0){
    console.log(a+b)
}
add(2)