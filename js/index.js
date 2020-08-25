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

//funkcja dopowiadająca za zmienianie się obrazków w sliderach. przyjmuje argument dodatni lub ujemny
const handleMovingPics = (move, listOfElements, visibleElem, className) => {
  listOfElements[visibleElem].classList.remove(className);

  if (move === -1) {
    visibleElem = visibleElem + move;
    if (visibleElem < 0) {
      visibleElem = listOfElements.length - 1;
    }
    listOfElements[visibleElem].classList.add(className);
  } else if (move === 1) {
    visibleElem = visibleElem + move;
    if (visibleElem > listOfElements.length - 1) {
      visibleElem = 0;
    }
    listOfElements[visibleElem].classList.add(className);
  }
  return visibleElem;
};

const intervalId = setInterval(() => {
  visibleElement = handleMovingPics(1, listOfImages, visibleElement, "visible");
}, 3500);

//slider2

const listOfImages2 = document.querySelectorAll(".elem");

const prev = document.getElementById("prevPicture");
const next = document.getElementById("nextPicture");
let visibleElement2 = 0;

listOfImages2[visibleElement2].classList.add("visible2");

prev.addEventListener(
  "click",
  () =>
    (visibleElement2 = handleMovingPics(
      -1,
      listOfImages2,
      visibleElement2,
      "visible2"
    ))
);
next.addEventListener(
  "click",
  () =>
    (visibleElement2 = handleMovingPics(
      1,
      listOfImages2,
      visibleElement2,
      "visible2"
    ))
);
