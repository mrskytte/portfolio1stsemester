//BASIC WEB LANDING PAGE

//TASK 01-01-02
const task010102 = document.getElementById("task1-box")
const Img1 = document.getElementById("img-010102");
const h5 = document.querySelectorAll("h5")

task010102.addEventListener("mouseenter", Img1Action)
task010102.addEventListener("mouseleave", Img1Reset)

var Img1Array = ["assets/images/01-01-02/page-1.png", "assets/images/01-01-02/page-2.png", "assets/images/01-01-02/page-3.png", "assets/images/01-01-02/page-4.png", "assets/images/01-01-02/page-5.png", "assets/images/01-01-02/page-6.png", "assets/images/01-01-02/page-7.png", "assets/images/01-01-02/page-8.png"];

var Img1Index = 0;
var Img1Timer = {
    start: function () {
        this.interval = setInterval(changeImg1, 500);
    },
    stop: function () {
        clearInterval(this.interval)
    }
}

function Img1Action() {
    Img1Timer.start();
    task010102.style.boxShadow = ("6px 12px 24px rgba(0, 0, 0, 0.3)");
    task010102.style.transform = ("translate(1%, 1%)")
    h5[0].style.transform = ("translate(.5%, 40%)")
}

function changeImg1() {
    if (Img1Index == 7) {
        Img1Index = 0;
    } else {
        Img1Index++;
    }
    Img1.setAttribute('src', Img1Array[Img1Index]);
}

function Img1Reset() {
    Img1Timer.stop();
    Img1Index = 0;
    Img1.setAttribute("src", Img1Array[Img1Index]);
     task010102.style.boxShadow = ("10px 8px 16px rgba(0, 0, 0, 0.16)");
    task010102.style.transform = ("translate(0%, 0%)")
    h5[0].style.transform = ("translate(0%, 50%)")
}

//TASK 01-03-01
const task010301 = document.getElementById("task2-box")

task010301.addEventListener("mouseenter", Img2Action)
task010301.addEventListener("mouseleave", Img2Reset)

const Img2 = document.getElementById("img-010301");

var Img2Array = ["assets/images/01-03-01/page-1.png", "assets/images/01-03-01/page-2.png", "assets/images/01-03-01/page-3.png", "assets/images/01-03-01/page-4.png", "assets/images/01-03-01/page-5.png", "assets/images/01-03-01/page-6.png", "assets/images/01-03-01/page-7.png", "assets/images/01-03-01/page-8.png", "assets/images/01-03-01/page-9.png"];

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
     task010301.style.boxShadow = ("6px 12px 24px rgba(0, 0, 0, 0.3)");
    task010301.style.transform = ("translate(1%, 1%)")
    h5[1].style.transform = ("translate(-.5%, 40%)")
}

function changeImg2() {
    if (Img2Index == 8) {
        Img2Index = 0;
    } else {
        Img2Index++;
    }
    Img2.setAttribute('src', Img2Array[Img2Index]);
}

function Img2Reset(){
    Img2Timer.stop();
    Img2Index = 0;
    Img2.setAttribute("src",Img2Array[Img2Index]);
    task010301.style.boxShadow = ("10px 8px 16px rgba(0, 0, 0, 0.16)");
    task010301.style.transform = ("translate(0%, 0%)")
    h5[1].style.transform = ("translate(0%, 50%)")
}

//TASK 01-04-01
const task010401 = document.getElementById("task3-box")

task010401.addEventListener("mouseenter", img3Action)
task010401.addEventListener("mouseleave", img3Reset)


function img3Action() {
     task010401.style.boxShadow = ("6px 12px 24px rgba(0, 0, 0, 0.3)");
    task010401.style.transform = ("translate(1%, 1%)")
    h5[2].style.transform = ("translate(.5%, 40%)")
}


function img3Reset(){
    task010401.style.boxShadow = ("10px 8px 16px rgba(0, 0, 0, 0.16)");
    task010401.style.transform = ("translate(0%, 0%)")
    h5[2].style.transform = ("translate(0%, 50%)")
}
