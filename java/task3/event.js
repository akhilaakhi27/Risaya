function clicked(){
    console.log("h1 is clicked")
}

function load(){
    alert("Hello")
}

//in javascript---addEventListener
//syntax:
//element.addEventListener("event",(function),usecapture)
document.getElementById("btn").addEventListener('dblclick',(e)=>{
    console.log(e,e.target)
    sum(10,20)
})

function sum(a,b){
    console.log(a+b)
}

//preventDefault()---to stop default events
function AnchorClicked(e){
    e.preventDefault()
}


