//BASIC CONTENT LANDING PAGE

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


//TASK 03-02-01
const task030201 = document.getElementById("task1-box")
const h5 = document.querySelectorAll("h5")

task030201.addEventListener("mouseenter", Img1Action)
task030201.addEventListener("mouseleave", Img1Reset)

function Img1Action() {
    task030201.style.boxShadow = ("6px 12px 24px rgba(0, 0, 0, 0.3)");
    task030201.style.transform = ("translate(-1%, 1%)")
    h5[0].style.transform = ("translate(.5%, 40%)")
}

function Img1Reset() {
    task030201.style.boxShadow = ("10px 8px 16px rgba(0, 0, 0, 0.16)");
    task030201.style.transform = ("translate(0%, 0%)")
    h5[0].style.transform = ("translate(0%, 50%)")
}

//TASK 030203
const task030203 = document.getElementById("task2-box")

task030203.addEventListener("mouseenter", Img2Action)
task030203.addEventListener("mouseleave", Img2Reset)

const Img2 = document.getElementById("img-030203");

var Img2Array = ["assets/images/03-02-03/page-1.png", "assets/images/03-02-03/page-2.png", "assets/images/03-02-03/page-3.png", "assets/images/03-02-03/page-4.png"];

var Img2Index = 0;

var Img2Timer = {
    start: function () {
        this.interval = setInterval(changeImg2, 500);
    },
    stop: function () {
        clearInterval(this.interval)
    }
}

function Img2Action() {
    Img2Timer.start();
    task030203.style.boxShadow = ("6px 12px 24px rgba(0, 0, 0, 0.3)");
    task030203.style.transform = ("translate(1%, 1%)")
    h5[1].style.transform = ("translate(-.5%, 40%)")
}

function changeImg2() {
    if (Img2Index == 3) {
        Img2Index = 0;
    } else {
        Img2Index++;
    }
    Img2.setAttribute('src', Img2Array[Img2Index]);
}

function Img2Reset() {
    Img2Timer.stop();
    Img2Index = 0;
    Img2.setAttribute("src", Img2Array[Img2Index]);
    task030203.style.boxShadow = ("10px 8px 16px rgba(0, 0, 0, 0.16)");
    task030203.style.transform = ("translate(0%, 0%)")
    h5[1].style.transform = ("translate(0%, 50%)")
}

//TASK 03-02-04
const task030204 = document.getElementById("task3-box")
const Img3 = document.getElementById("img-030204");


task030204.addEventListener("mouseenter", Img3Action)
task030204.addEventListener("mouseleave", Img3Reset)

var Img3Array = ["assets/images/03-02-04/page-1.png", "assets/images/03-02-04/page-2.png", "assets/images/03-02-04/page-3.png", "assets/images/03-02-04/page-4.png", "assets/images/03-02-04/page-5.png", "assets/images/03-02-04/page-6.png", "assets/images/03-02-04/page-7.png"];

var Img3Index = 0;
var Img3Timer = {
    start: function () {
        this.interval = setInterval(changeImg3, 500);
    },
    stop: function () {
        clearInterval(this.interval)
    }
}

function Img3Action() {
    Img3Timer.start();
    task030204.style.boxShadow = ("6px 12px 24px rgba(0, 0, 0, 0.3)");
    task030204.style.transform = ("translate(-1%, 1%)")
    h5[2].style.transform = ("translate(.5%, 40%)")
}

function changeImg3() {
    if (Img3Index == 6) {
        Img3Index = 0;
    } else {
        Img3Index++;
    }
    Img3.setAttribute('src', Img3Array[Img3Index]);
}

function Img3Reset() {
    Img3Timer.stop();
    Img3Index = 0;
    Img3.setAttribute("src", Img3Array[Img3Index]);
    task030204.style.boxShadow = ("10px 8px 16px rgba(0, 0, 0, 0.16)");
    task030204.style.transform = ("translate(0%, 0%)")
    h5[2].style.transform = ("translate(0%, 50%)")
}

//TASK 03-02-05
const task030205 = document.getElementById("task4-box")

task030205.addEventListener("mouseenter", Img4Action)
task030205.addEventListener("mouseleave", Img4Reset)

const Img4 = document.getElementById("img-030205");

var Img4Array = ["assets/images/03-02-05/page-1.png", "assets/images/03-02-05/page-2.png", "assets/images/03-02-05/page-3.png",  "assets/images/03-02-05/page-5.png", "assets/images/03-02-05/page-7.png"];

var Img4Index = 0;

var Img4Timer = {
    start: function () {
        this.interval = setInterval(changeImg4, 500);
    },
    stop: function () {
        clearInterval(this.interval)
    }
}

function Img4Action() {
    Img4Timer.start();
    task030205.style.boxShadow = ("6px 12px 24px rgba(0, 0, 0, 0.3)");
    task030205.style.transform = ("translate(1%, 1%)")
    h5[3].style.transform = ("translate(-.5%, 40%)")
}

function changeImg4() {
    if (Img4Index == 4) {
        Img4Index = 0;
    } else {
        Img4Index++;
    }
    Img4.setAttribute('src', Img4Array[Img4Index]);
}

function Img4Reset() {
    Img4Timer.stop();
    Img4Index = 0;
    Img4.setAttribute("src", Img4Array[Img4Index]);
    task030205.style.boxShadow = ("10px 8px 16px rgba(0, 0, 0, 0.16)");
    task030205.style.transform = ("translate(0%, 0%)")
    h5[3].style.transform = ("translate(0%, 50%)")
}
