const names = ["akhila","anu","anila","sunitha","anjali","deepa"];

  const searchbox=document.getElementById("searchInput")
  const check=document.getElementById("check")
  const suggest=document.getElementById("suggestions")

  function dynamic(){
    const inputvalue=searchbox.value.toLowerCase()
    suggest.innerHTML=""
    if (inputvalue){
          let matchnames;
          if(check.checked){
          matchnames=names.filter((names)=>{
          return names.startsWith(inputvalue)

      })
    }else{
      matchnames=names.filter(names=names.toLowerCase().includes(inputvalue))
    }

    matchnames.map((names)=>{
      const div=document.createElement('div')
      div.textContent=names;
      div.style.padding="5 pxqaA";
      div.style.cursor="pointer"
      suggest.appendChild(div)
    })
  }
}
  
  

  
  