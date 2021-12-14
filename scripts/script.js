var deButton = document.querySelector("header button");
var deNav = document.querySelector("header nav");

function toonMenu() {
    console.log("click");
    deNav.classList.toggle("toonMenu");
    deButton.classList.toggle("veranderen");
}

deButton.addEventListener("click", toonMenu);