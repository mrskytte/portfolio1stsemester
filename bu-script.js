//BASIC UX LANDING PAGE

//TASK 04-01-01
const task040101 = document.getElementById("task1-box")
const Img1 = document.getElementById("img-040101");
const h5 = document.querySelectorAll("h5")

task040101.addEventListener("mouseenter", Img1Action)
task040101.addEventListener("mouseleave", Img1Reset)

var Img1Array = ["assets/images/04-01-01/page-1.png", "assets/images/04-01-01/page-2.png", "assets/images/04-01-01/page-3.png", "assets/images/04-01-01/page-4.png", "assets/images/04-01-01/page-5.png", "assets/images/04-01-01/page-6.png", "assets/images/04-01-01/page-7.png", "assets/images/04-01-01/page-8.png"];

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
    task040101.style.boxShadow = ("6px 12px 24px rgba(0, 0, 0, 0.3)");
    task040101.style.transform = ("translate(-1%, 1%)")
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
     task040101.style.boxShadow = ("10px 8px 16px rgba(0, 0, 0, 0.16)");
    task040101.style.transform = ("translate(0%, 0%)")
    h5[0].style.transform = ("translate(0%, 50%)")
}

//TASK 04-02-01
const task040201 = document.getElementById("task2-box")

task040201.addEventListener("mouseenter", img2Action)
task040201.addEventListener("mouseleave", img2Reset)


function img2Action() {
     task040201.style.boxShadow = ("6px 12px 24px rgba(0, 0, 0, 0.3)");
    task040201.style.transform = ("translate(1%, 1%)")
    h5[1].style.transform = ("translate(-.5%, 40%)")
}


function img2Reset(){
    task040201.style.boxShadow = ("10px 8px 16px rgba(0, 0, 0, 0.16)");
    task040201.style.transform = ("translate(0%, 0%)")
    h5[1].style.transform = ("translate(0%, 50%)")
}
