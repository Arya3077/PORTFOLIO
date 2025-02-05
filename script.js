const menu = document.getElementById("menu")
const sidebar= document.getElementsByClassName("sidebar")[0];
const x= document.getElementById("X");
const d= document.getElementById("d");
const nav= document.getElementsByTagName("nav");
const body= document.body;


menu.addEventListener("click",()=>{
    sidebar.style.display="flex";

}

)

x.addEventListener("click",()=>{
    sidebar.style.display="none";})

d.addEventListener("click",()=>{
     if (body.classList.contains("dark-mode")) {
        // If dark mode is active, switch back to light mode
        body.classList.remove("dark-mode");
    } else {
        // If dark mode is not active, apply dark mode
        body.classList.add("dark-mode");
    }
})
   