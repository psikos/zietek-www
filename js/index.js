const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".navigation-item a");

const handleHamburgerClick = (event) => {
  hamburger.classList.toggle("hamburger-active");
  navigation.classList.toggle("navigation-active");
};

navItems.forEach((elem) =>
  elem.addEventListener("click", handleHamburgerClick)
);
hamburger.addEventListener("click", handleHamburgerClick);

//slider

const listOfImages = document.querySelectorAll(".slider ul li");
let visibleElement = 0;

listOfImages[visibleElement].classList.add("visible");

const handlePrev = (event) => {
  listOfImages[visibleElement].classList.remove("visible");
  visibleElement--;
  if (visibleElement < 0) {
    visibleElement = listOfImages.length - 1;
  }
  listOfImages[visibleElement].classList.add("visible");
};
const handleNext = (event) => {
  listOfImages[visibleElement].classList.remove("visible");
  visibleElement++;
  if (visibleElement > listOfImages.length - 1) {
    visibleElement = 0;
  }
  listOfImages[visibleElement].classList.add("visible");
};
const idInterwalu = window.setInterval(handleNext, 3500);

//slider2

const listOfImages2 = document.querySelectorAll(".elem");

const prev = document.getElementById("prevPicture");
const next = document.getElementById("nextPicture");
let visibleElement2 = 0;

listOfImages2[visibleElement2].classList.add("visible2");

const handlePrev2 = (event) => {
  listOfImages2[visibleElement2].classList.remove("visible2");
  visibleElement2--;
  if (visibleElement2 < 0) {
    visibleElement2 = listOfImages.length - 1;
  }
  listOfImages2[visibleElement2].classList.add("visible2");
};
const handleNext2 = (event) => {
  listOfImages2[visibleElement2].classList.remove("visible2");
  visibleElement2++;
  if (visibleElement2 > listOfImages2.length - 1) {
    visibleElement2 = 0;
  }
  listOfImages2[visibleElement2].classList.add("visible2");
};
prev.addEventListener("click", handlePrev2);
next.addEventListener("click", handleNext2);
