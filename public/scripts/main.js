import Modal from "./modal.js";

const modal = Modal();

// Pegando todos os botões com class check
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    modal.open();
  });
});

// pegando todos os botões com class delete
const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    modal.open();
  });
});
