let navbar = document.querySelector(".hamburger-icon");
let menubar = document.querySelector(".menu");
let eventImg = document.querySelectorAll(".event-img");
let eventContent = document.querySelector(".event-content");
let cancelbtn = document.querySelector(".content-close");

navbar.addEventListener('click',()=>{
    navbar.classList.toggle("active");    
    menubar.classList.toggle("active"); 
       
})

for(e of eventImg){
    e.addEventListener('click',()=>{
    
        eventContent.classList.add("active");
    })
}



cancelbtn.addEventListener('click',()=>{
    eventContent.classList.remove("active");
})