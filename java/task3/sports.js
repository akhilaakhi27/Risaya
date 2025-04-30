let sports=[
    {name:"a",sport:"football"},
    {name:"a",sport:"kabadi"},
    {name:"a",sport:"Cricket"},
    {name:"a",sport:"Cricket"},
    {name:"a",sport:"Hockey"},
    {name:"a",sport:"Hockey"},
    {name:"a",sport:"Cricket"}
]


let reduce_arr=sports.reduce((acc,current)=>{
    acc[current.sport]?acc[current.sport]++:acc[current.sport]=1
    return acc   
},{})
console.log(reduce_arr)




