const menu = document.getElementById("menu")
const sidebar= document.getElementsByClassName("sidebar")[0];
const x= document.getElementById("X");
const d= document.getElementById("d");
const nav= document.getElementsByTagName("nav");
var body= document.body;


menu.addEventListener("click",()=>{
    sidebar.style.display="flex";

}

)

x.addEventListener("click",()=>{
    sidebar.style.display="none";})

    function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
      }