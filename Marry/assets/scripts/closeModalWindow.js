const submitButton = document.querySelector(".form_visitors__submit");
const closeModalWindowButton = document.querySelector(
  ".success_register__close",
);
const successBlock = document.querySelector(".success_register");

closeModalWindowButton.addEventListener("click", () => {
  closeModal();
});

document.addEventListener("click", (event) => {
  if (
    !successBlock.contains(event.target) &&
    !submitButton.contains(event.target) &&
    modalWindow.classList.contains("modal_visible")
  ) {
    closeModal();
  }
});

function closeModal() {
  modalWindow.classList.remove("modal_visible");

  setTimeout(() => {
    modalWindow.style.zIndex = "-1";
  }, 1000);
}
