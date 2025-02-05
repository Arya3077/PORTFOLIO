const menu = document.getElementById("menu")
const sidebar= document.getElementsByClassName("sidebar")[0];
const x= document.getElementById("X");

menu.addEventListener("click",()=>{
    sidebar.style.display="flex";

}

)

x.addEventListener("click",()=>{
    sidebar.style.display="none";})