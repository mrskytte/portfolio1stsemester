//PORTFOLIO LANDING PAGE

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



//DEFINING ELEMENTS
var website = window.location.hostname

const bw = document.getElementById("basic-web")
const one = document.getElementById("one")
const bwH1 = document.getElementById("bw-h1")
const bwBox = document.getElementById("bw-box")

const ba = document.getElementById("basic-animation")
const two = document.getElementById("two")
const baH1 = document.getElementById("ba-h1")
const baBox = document.getElementById("ba-box")

const bc = document.getElementById("basic-content")
const three = document.getElementById("three")
const bcH1 = document.getElementById("bc-h1")
const bcBox = document.getElementById("bc-box")

const bu = document.getElementById("basic-ux")
const four = document.getElementById("four")
const buH1 = document.getElementById("bu-h1")
const buBox = document.getElementById("bu-box")

bwBox.addEventListener("mouseover", bwMove)
bwBox.addEventListener("mouseout", bwOut)
bwBox.addEventListener("click", bwClick)

baBox.addEventListener("mouseover", baMove)
baBox.addEventListener("mouseout", baOut)
baBox.addEventListener("click", baClick)

bcBox.addEventListener("mouseover", bcMove)
bcBox.addEventListener("mouseout", bcOut)
bcBox.addEventListener("click", bcClick)

buBox.addEventListener("mouseover", buMove)
buBox.addEventListener("mouseout", buOut)
buBox.addEventListener("click", buClick)

//BASIC WEB

function bwMove(){
    bwH1.style.top = "4%"
    bwH1.style.left = "50%"
    one.style.left = "23%"
    bwBox.style.boxShadow = "10px 10px 20px rgba(0, 0, 0, 0.16)"
    bwBox.style.top = "27%"
    bwBox.style.left = "38%"
}

function bwOut(){
    bwH1.style.top = "5%"
    bwH1.style.left = "48%"
    one.style.left = "25%"
    bwBox.style.boxShadow = "5px 0px 6px rgba(0, 0, 0, 0.16)"
    bwBox.style.top = "25%"
    bwBox.style.left = "37%"
}

function bwClick(){
    window.location.href="basic-web.html"
}

//BASIC ANIMATION

function baMove(){
    baH1.style.top = "133%"
    baH1.style.left = "29%"
    two.style.right = "30%"
    baBox.style.boxShadow = "10px 10px 20px rgba(0, 0, 0, 0.16)"
    baBox.style.top = "157%"
    baBox.style.left = "36%"
}

function baOut(){
    baH1.style.top = "135%"
    baH1.style.left = "30%"
    two.style.right = "32%"
    baBox.style.boxShadow = "5px 0px 6px rgba(0, 0, 0, 0.16)"
    baBox.style.top = "155%"
    baBox.style.left = "37%"
}

function baClick(){
    window.location.href="basic-animation.html"
}

//BASIC CONTENT

function bcMove(){
    bcH1.style.top = "254%"
    bcH1.style.left = "50%"
    three.style.left = "23%"
    bcBox.style.boxShadow = "10px 10px 20px rgba(0, 0, 0, 0.16)"
    bcBox.style.top = "277%"
    bcBox.style.left = "38%"
}

function bcOut(){
    bcH1.style.top = "255%"
    bcH1.style.left = "48%"
    three.style.left = "25%"
    bcBox.style.boxShadow = "5px 0px 6px rgba(0, 0, 0, 0.16)"
    bcBox.style.top = "275%"
    bcBox.style.left = "37%"
}

function bcClick(){
    window.location.href="basic-content.html"
}

//BASIC UX

function buMove(){
    buH1.style.top = "383%"
    buH1.style.left = "29%"
    four.style.right = "30%"
    buBox.style.boxShadow = "10px 10px 20px rgba(0, 0, 0, 0.16)"
    buBox.style.top = "407%"
    buBox.style.left = "36%"
}

function buOut(){
    buH1.style.top = "385%"
    buH1.style.left = "30%"
    four.style.right = "32%"
    buBox.style.boxShadow = "5px 0px 6px rgba(0, 0, 0, 0.16)"
    buBox.style.top = "405%"
    buBox.style.left = "37%"
}

function buClick(){
    window.location.href="basic-ux.html"
}

//BASIC WEB LANDING PAGE

var bwImg2 = document.getElementById("img-010301")

var bwImg2Array = ["assets/images/01-03-01/page-1.png","assets/images/01-03-01/page-2.png","assets/images/01-03-01/page-3.png","assets/images/01-03-01/page-4.png","assets/images/01-03-01/page-5.png","assets/images/01-03-01/page-6.png","assets/images/01-03-01/page-7.png","assets/images/01-03-01/page-8.png","assets/images/01-03-01/page-9.png"]
