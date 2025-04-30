// redeclared-var
// reassign-var,let
// scope-functional scope,,blocklevel scpe

// var
var a=10
a=20
var a=30
console.log(a)

// let
let b=10
b=20
// let b=30 identifier b has already been declare
console.log(b)

// const
const c=10
// c=20 //assignment to const variable
// const c=30  //Identifier c has alredy been
console.log(c)

//var vs let
for (var i=0;i<5;i++){
// for (let i=0;i<5;i++){ //i is not defined
    console.log(i,'inside')
}
console.log(i,"outside")

//operators
//assignment operators ==,values check,datatype check
//comparison 
//arithmetic
//logical-and,or,not
//ternary operator-if,ifelse

//conditional statements


