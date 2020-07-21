const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const navItems = document.querySelectorAll('.navigation-item a');

navItems.forEach(elem => elem.addEventListener('click', handleHamburgerClick));
hamburger.addEventListener('click', handleHamburgerClick);

function handleHamburgerClick(event) {
    hamburger.classList.toggle('hamburger-active');
    navigation.classList.toggle('navigation-active');
}