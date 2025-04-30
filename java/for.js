//normal loop---i-position,array[1]->values
for(var i =0;i<5;i++){
    console.log(i)
}

let array=[5,9,7,5,6]
for(let i=0;i<array.length;i++){
    console.log(i)
}

//for of loop---.i-values
for(let i of array){
    console.log(i)
}

//for in loop
for(let i in array){
    console.log(i)
}
// //for each loop
// array.forEach(i=>{
//     console.log(i)
// });

array.forEach((i=>console.log(i)))


