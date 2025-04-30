//each value to assign to each new variables
let array=[6,9,4,3,8]
// let first=  array[0]
// let second=  array[1]
// console.log(first,second)

let[first,second,third,fourth,fifth]=array
console.log(first,second,third,fourth,fifth)

let[x,y,...z]=array
console.log(x,y,z)

let object={
    name:"a",
    age:26,
    address:"trichy"
}

let{name:fullname,age:old,address:city}=object
console.log(fullname,old,city)

//to extract the value from variables and bind them to new objects