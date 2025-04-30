

let table1=document.createElement("table")
table1.setAttribute("id","table1")

let row1=document.createElement("tr")

let td11=document.createElement("td")
td11.innerText="1"
row1.appendChild(td11)
let td12=document.createElement("td")
td12.innerText="2"
row1.appendChild(td12)
let td13=document.createElement("td")
td13.innerText="3"
row1.appendChild(td13)

table1.appendChild(row1)

let row2=document.createElement("tr")
table1.appendChild(row2)

let td21=document.createElement("td")
td21.innerText="1"
let td22=document.createElement("td")
td22.innerText="2"
let td23=document.createElement("td")
td23.innerText="3"

row2.appendChild(td21)
row2.appendChild(td22)
row2.appendChild(td23)
table1.appendChild(row2)

let row3=document.createElement("tr")
table1.appendChild(row3)

let td31=document.createElement("td")
td31.innerText="1"
let td32=document.createElement("td")
td32.innerText="2"
let td33=document.createElement("td")
td33.innerText="3"

row3.appendChild(td31)
row3.appendChild(td32)
row3.appendChild(td33)
table1.appendChild(row3)


document.body.appendChild(table1)














