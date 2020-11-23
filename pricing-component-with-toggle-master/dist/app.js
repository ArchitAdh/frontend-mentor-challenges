const cards = document.getElementById("cards");
const toggle = document.getElementById("checkbox");

toggle.addEventListener("change", (e) => {
  cards.classList.toggle("show-monthly");
});
