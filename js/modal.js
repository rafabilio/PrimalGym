const modal = document.getElementById("exercise-modal");

const openModalButton = document.querySelector(".add-exercise");

const closeModalButton = document.querySelector(".close-modal");

openModalButton.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});
