//map-to create a new array from an existing array
//return property always place in end of line
//if u Do not put a return property using curly braces 
let array=[7,9,6,4,3]
let empArr=[]
for(let i=0;i,i<array.length;i++){
    empArr.push(array[i]*8)

}
console.log(empArr)
let map_Arr=array.map((item,index)=>{
    return item*8

})
console.log(map_Arr)

//array of object
let student=[
    {name:"Akhi",age:25},
    {name:"Anu",age:24},
    {name:"Anila",age:23},
    {name:"Radhika",age:26},
    {name:"Athulyaa",age:28},
]
let map_array=student.map((item)=>{
    console.log(item)
    // return  item.name
    return item.age
})

console.log(map_array)

//filter---for condition purposes

let filter_array=array.filter((item)=>item % 2 == 0).map((i)=>i*8)
console.log(filter_array)

//array of object
let filter_arr=student.filter((item)=>item.age >= 25).map((i)=>i.name)
console.log(filter_arr)


//reduce ---return a single value oor object,total,count
//accumulator---start value
//current value---next value
//initial value---its fixed by user

let reduce_arr=array.reduce((a,c)=>{
    return a+c
},[])
console.log(reduce_arr)




