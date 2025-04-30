let array=[2,5,8,9,6,11,85]
let evenno=[]
for(i=0;i<array.length;i++){
    if(i%2==0){
        evenno.push(array[i])
    }
}
console.log(evenno)