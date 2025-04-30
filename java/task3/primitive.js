//primitive data type ---different memory location 


let a=10
let b=a
b=20
console.log(a,b)

//non primitive---same memmory location
let array=[3,9,7,5,3]
let array1=array
array1=Object.assign([],array1)
array1.push(10)
console.log(array,array1)


//1.object.assign
//syntax:
//c.Arr=object.assign(target,source)


//object
let object={
    x:1,
    y:2,
    z:3
}
let object1=object
object1=Object.assign({},object1)
object1.z=5
console.log(object,object1)

//spread operator




