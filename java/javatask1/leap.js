var year=2020

if(year%4==0 &&year%100!==0){
    console.log("leap year")
}
else if(year%400==0){
    console.log("leap year")
}
else{
    console.log("not a leap year")
}