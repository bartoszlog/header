const menu = document.querySelector(".navigation__text");
const navigation = document.querySelector(".navigation__list");
const classNames = [
  "navigation__list",
  "navigation__menu",
  "navigation__item",
  "navigation__link",
  "navigation__text"
];

menu.addEventListener("click", () => {
  navigation.classList.add("active");
});

document.addEventListener("click", e => {
  if (classNames.some(item => e.target.classList.contains(item))) {
    return;
  }
  navigation.classList.remove("active");
});
