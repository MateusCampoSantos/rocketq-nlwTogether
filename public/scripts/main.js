import { Modal } from "./modal";

const modal = Modal();

// Pegando todos os botões com class check
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach((button) => {
  button.eventlistener("click", (event) => {
    modal.open();
  });
});

//Abrir modal
modal.open();
