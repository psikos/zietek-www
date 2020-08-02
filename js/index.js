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

const prev = document.getElementById("prevPicture");
const next = document.getElementById("nextPicture");
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
// const idInterwalu = window.setInterval(handleNext, 2000);
// prev.addEventListener('click', handlePrev);
// next.addEventListener('click', handleNext);
