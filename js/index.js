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
  visibleElem = visibleElem + move;

  if (move === -1) {
    if (visibleElem < 0) {
      visibleElem = listOfElements.length - 1;
    }
  } else if (move === 1) {
    if (visibleElem > listOfElements.length - 1) {
      visibleElem = 0;
    }
  }

  listOfElements[visibleElem].classList.add(className);

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

// formularz

const submit = document.querySelector(".submit");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const statusElem = document.querySelector(".status");

const divMaker = (message, parentElement) => {
  const emailMessage = document.createElement("div");
  emailMessage.innerHTML = message;
  parentElement.appendChild(emailMessage);
};

const handleSubmit = (event) => {
  event.preventDefault();
  statusElem.innerHTML = "";
  const nameValue = name.value;
  const emailValue = email.value;
  const messageValue = message.value;

  let isValid = false;

  if (nameValue.length > 2) {
    isValid = true;
  } else {
    event.preventDefault();
    isValid = false;
    divMaker("Imię za krótkie.", statusElem);
  }

  if (
    emailValue.length > 5 &&
    emailValue.includes("@") &&
    emailValue.includes(".")
  ) {
    isValid = true;
  } else {
    event.preventDefault();
    isValid = false;
    divMaker("Niepoprawny email.", statusElem);
  }

  if (messageValue.length > 20 && messageValue.length < 300) {
    isValid = true;
  } else {
    event.preventDefault();
    isValid = false;
    divMaker(
      "Wiadomość powinna mieć nie mniej niż 20 i nie więcej niż 300 znaków.",
      statusElem
    );
  }

  isValid ? divMaker("Wiadomość wysłana.", statusElem) : null;
};

submit.addEventListener("click", handleSubmit);
