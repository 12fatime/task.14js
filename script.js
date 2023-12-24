const sidebar=document.querySelector(".side-bar")
const menu=document.querySelector(".menu")

menu.addEventListener("click",()=>{
    if(sidebar.computedStyleMap.display==='none'){
        sidebar.computedStyleMap.display='block'
    }
    else{
        sidebar.computedStyleMap.display='none'
    }
})
