const mainForm = document.querySelector(".main_form");
const modalWindow = document.querySelector(".modal");

mainForm.addEventListener("submit", (event) => {
  event.preventDefault();
  modalWindow.style.zIndex = "9999";
  modalWindow.classList.add("modal_visible");
});
