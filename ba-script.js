//BASIC ANIMATION LANDING PAGE

//TASK 02-02-01
const task020201 = document.getElementById("task1-box")
const Img1 = document.getElementById("img-020201");
const h5 = document.querySelectorAll("h5")

task020201.addEventListener("mouseenter", Img1Action)
task020201.addEventListener("mouseleave", Img1Reset)

var Img1Array = ["assets/images/02-02-01/page-1.png", "assets/images/02-02-01/page-2.png", "assets/images/02-02-01/page-3.png", "assets/images/02-02-01/page-4.png", "assets/images/02-02-01/page-5.png", "assets/images/02-02-01/page-6.png", "assets/images/02-02-01/page-7.png", "assets/images/02-02-01/page-8.png"];

var Img1Index = 0;
var Img1Timer = {
    start: function () {
        this.interval = setInterval(changeImg1, 100);
    },
    stop: function () {
        clearInterval(this.interval)
    }
}

function Img1Action() {
    Img1Timer.start();
    task020201.style.boxShadow = ("6px 12px 24px rgba(0, 0, 0, 0.3)");
    task020201.style.transform = ("translate(1%, 1%)")
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
     task020201.style.boxShadow = ("10px 8px 16px rgba(0, 0, 0, 0.16)");
    task020201.style.transform = ("translate(0%, 0%)")
    h5[0].style.transform = ("translate(0%, 50%)")
}

//TASK 02-04-06
const task020406 = document.getElementById("task2-box")

task020406.addEventListener("mouseenter", Img2Action)
task020406.addEventListener("mouseleave", Img2Reset)

const Img2 = document.getElementById("img-020406");


function Img2Action() {
    Img2.innerHTML = '<video class="task-img" autoplay=autoplay muted loop> <source src="assets/images/02-04-06/video.mp4" type="video/mp4"></video>';
     task020406.style.boxShadow = ("6px 12px 24px rgba(0, 0, 0, 0.3)");
    task020406.style.transform = ("translate(1%, 1%)")
    h5[1].style.transform = ("translate(-.5%, 40%)")
}


function Img2Reset(){
 Img2.innerHTML = '<img alt="Preview of Interactive Poster" src="assets/images/02-04-06/e.t-screen.png" class="task-img">';
    task020406.style.boxShadow = ("10px 8px 16px rgba(0, 0, 0, 0.16)");
    task020406.style.transform = ("translate(0%, 0%)")
    h5[1].style.transform = ("translate(0%, 50%)")
}

//TASK 02-04-07
const task020407 = document.getElementById("task3-box")
const Img3 = document.getElementById("img-020407");

task020407.addEventListener("mouseenter", Img3Action)
task020407.addEventListener("mouseleave", Img3Reset)

var Img3Array = ["assets/images/02-04-07/page-1.png", "assets/images/02-04-07/page-2.png", "assets/images/02-04-07/page-3.png", "assets/images/02-04-07/page-4.png", "assets/images/02-04-07/page-5.png", "assets/images/02-04-07/page-6.png", "assets/images/02-04-07/page-7.png", "assets/images/02-04-07/page-8.png"];

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
    task020407.style.boxShadow = ("6px 12px 24px rgba(0, 0, 0, 0.3)");
    task020407.style.transform = ("translate(1%, 1%)")
    h5[2].style.transform = ("translate(.5%, 40%)")
}

function changeImg3() {
    if (Img3Index == 7) {
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
    task020407.style.boxShadow = ("10px 8px 16px rgba(0, 0, 0, 0.16)");
    task020407.style.transform = ("translate(0%, 0%)")
    h5[2].style.transform = ("translate(0%, 50%)")
}
