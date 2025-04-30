console.log(document)

//dom---document object modal -->to access the html elements

//access methods

//document.getElementById
console.log(document.getElementById('java')) //id1 is the id of the html element
//document.getElementByTagName
console.log(document.getElementsByTagName('h1')) //h1 is the tag name of the html element
//document.querySelector
console.log(document.querySelector('h1')) //h1 is the tag name of the html element
//document.querySelectorAll
console.log(document.querySelectorAll('h1')) //h1 is the tag name of the html element
//document.getElementByClassName
console.log(document.getElementsByClassName('h1'))

//How to access the values
//innerHTML
console.log(document.getElementById('java').innerHTML)
//INNERText
console.log(document.getElementById('java').innerText)

//how to change values
document.getElementById("java").innerText="Javascript has chnaged"
document.getElementById("dom").innerText="dom changed"

console.log(document.getElementsByClassName('cls'))
document.getElementsByClassName("cls").innerText="cls has  changed"
//index
// document.getElementsByClassName("cls")[0].innerText="cls has  changed"


// //for loop
// for(let i=0;i<=document.getElementsByClassName("cls").length;i++){
//     document.getElementsByClassName('cls')[i].innerText="content chnged"
// }

//how to create element in javascript
//setAttribute--->how to set attribute
//class list.add/remove
let contact=document.createElement("div")
contact.setAttribute("id","contact")

let name=document.createElement("h1")
name.setAttribute("id","name")
name.innerText="Risaya Academy"
contact.appendChild(name)

let address=document.createElement("h4")
address.innerText="address banglore"
contact.appendChild(address)
    
let link=document.createElement("a")
link.setAttribute("href","###")
link.setAttribute("tarrget","blank")
link.innerText="click here"
contact.appendChild(link)

document.body.appendChild(contact)
console.log(contact)
