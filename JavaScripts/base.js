//HAMBURGER MENU

const hamburger = document.getElementById("hide-button")
const hamLine = document.getElementsByClassName("hamburger")
const side = document.getElementById("side")


hamburger.addEventListener("click", openMenu)

var counter = 0

function openMenu(){
    if (counter == 0){
    side.style.top = "0";
    hamburger.style.bottom = "93%";
    hamburger.style.borderRadius = "50px"
    hamburger.style.boxShadow = "5px 10px 20px rgba(0, 0, 0, 0.16)"
    hamLine[0].style.opacity = "0"
    hamLine[2].style.opacity = "0"
    hamLine[1].style.transform = "rotate(90deg)";
        counter++;
}else {
    side.style.top = "100vh";
    hamburger.style.bottom = "0";
    hamburger.style.borderRadius = ""
    hamburger.style.boxShadow = "5px 0px 6px rgba(0, 0, 0, 0.16)"
     hamLine[0].style.opacity = "1"
    hamLine[2].style.opacity = "1"
    hamLine[1].style.transform = "rotate(0deg)"
    counter = 0;
}
}
