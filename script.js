const container = document.querySelector(".container");
const menuIcon = document.querySelector(".menu-icon");
const navigation = document.querySelector(".navigation");
const contactItem = document.querySelector(".contact");

menuIcon.addEventListener("click", () => {
  container.classList.toggle("navigate");
});

navigation.addEventListener("mouseover", () => {
  container.classList.add("change");
});

navigation.addEventListener("mouseout", () => {
  container.classList.remove("change");
});

contactItem.addEventListener("mouseover", () => {
  container.classList.add("orange");
});

contactItem.addEventListener("mouseout", () => {
  container.classList.remove("orange");
});
