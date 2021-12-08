// JavaScript Document
// var deButton = document.querySelector("header div");
// var deNav = document.querySelector("header nav");

// function toggleMenu(){
//     deNav.classList.toggle("toonMenu");
//     console.log("click");
// }


// deButton.addEventListener("click", toggleMenu);

// ====================================

var deButton = document.querySelector("header button");
var deNav = document.querySelector("header nav");

deButton.addEventListener("click", toonMenu);

function toonMenu() {
    deNav.classList.toggle("toonMenu");
    deButton.classList.toggle("veranderen");
}