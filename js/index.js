const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".navigation-item a");

navItems.forEach((elem) =>
  elem.addEventListener("click", handleHamburgerClick)
);
hamburger.addEventListener("click", handleHamburgerClick);

function handleHamburgerClick(event) {
  hamburger.classList.toggle("hamburger-active");
  navigation.classList.toggle("navigation-active");
}

//slider

const listOfImages = document.querySelectorAll(".slider ul li");
let visibleElement = 0;

listOfImages[visibleElement].classList.add("visible");

function handlePrev(event) {
  listOfImages[visibleElement].classList.remove("visible");
  visibleElement--;
  if (visibleElement < 0) {
    visibleElement = listOfImages.length - 1;
  }
  listOfImages[visibleElement].classList.add("visible");
}
function handleNext(event) {
  listOfImages[visibleElement].classList.remove("visible");
  visibleElement++;
  if (visibleElement > listOfImages.length - 1) {
    visibleElement = 0;
  }
  listOfImages[visibleElement].classList.add("visible");
}
const idInterwalu = window.setInterval(handleNext, 3500);

const listOfImages2 = document.querySelectorAll(".elem");
console.log(listOfImages2);

const prev = document.getElementById("prevPicture");
const next = document.getElementById("nextPicture");
let visibleElement2 = 0;

listOfImages2[visibleElement2].classList.add("visible2");

function handlePrev2(event) {
  listOfImages2[visibleElement2].classList.remove("visible2");
  visibleElement2--;
  if (visibleElement2 < 0) {
    visibleElement2 = listOfImages.length - 1;
  }
  listOfImages2[visibleElement2].classList.add("visible2");
}
function handleNext2(event) {
  listOfImages2[visibleElement2].classList.remove("visible2");
  visibleElement2++;
  if (visibleElement2 > listOfImages2.length - 1) {
    visibleElement2 = 0;
  }
  listOfImages2[visibleElement2].classList.add("visible2");
}
prev.addEventListener("click", handlePrev2);
next.addEventListener("click", handleNext2);
