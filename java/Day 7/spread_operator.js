//symbol----


let array=[7,9,5,3,8]
let array1=[...array]
array1.push(10)
console.log(array,array1)

//many inbuilt  functions
let max_val=Math.max(...array)
console.log(max_val)

let min_val=Math.min(...array)
console.log(min_val)

function sum(...args){
    return args
}
console.log(sum(5,6,9,8,34))


//copy purpose
//shallow copy---it creates address for only first level elements
//deep copy---

let student={
    name:"a",
    address:{
        place:"chennai",
        pin:543267,
        city:{
        street:"b",
        location:{
            landmark:"church"

        }
        }
    },
    marks:{
        English:89,
        Grade:{
            Top:"s"
        }
    }
}

//main----student
//First level elements :name,address,marks
//second level :place,pincode,english,city
//third:street,top
console.log(student)

let stud1={...student}
stud1.name="Anu"
// stud1.address.place="kerala"
console.log("copy",stud1)

let stud2={...student,address:{...student.address}}
stud2.address.place="kerala"
console.log("copy1",stud2)


let stud3={...student,address:{...student.address,city:{...student.address.city}}}
stud3.address.city.street="SNIT"
console.log("copy3",stud3)
console.log("original",student)

let stud4={...student,address:{...student.address,city:{...student.address.city,location:{...student.address.city.location}}}}
stud4.address.city.location="temple"
console.log("copy4",stud4)
console.log("original",student)



