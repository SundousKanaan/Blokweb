// JavaScript Document
var deButton = document.querySelector("header div");
var deNav = document.querySelector("header nav");

function toggleMenu(){
    deNav.classList.toggle("toonMenu");
    console.log("click");
}

deButton.addEventListener("click", toggleMenu);


var toTop = document.querySelector("button");
var option = {
    rootMargin: "1em",
    threshold:0.2
}

function callbackFunction(entries){
    entries.forEach(entry => {
        // check of het element in beeld is
        if (entry.intersectionRatio > 0) {
          //voeg de class toe wanneer deze in beeld is
            entry.target.classList.add('add')   
        }
    })
}

var observer = new IntersectionObserver(callbackFunction, options);
toTop.forEach(item => {
    //observeer het element
    observer.observe(item)
})