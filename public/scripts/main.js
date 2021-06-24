import Modal from "./modal.js";

const modal = Modal();

// Pegando todos os botões com class check
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    modal.open();
  });
});

//Abrir modal
modal.open();
