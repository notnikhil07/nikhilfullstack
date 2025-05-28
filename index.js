const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const menubar = document.querySelector(".mobile_navbar");

console.log(hamburger);
console.log(close);
console.log(menubar);


hamburger.addEventListener("click", ()=>{
    menubar.classList.add("active");
    console.log("click");

})

close.addEventListener("click", ()=>{
    menubar.classList.remove("active");
    console.log("click");

})

