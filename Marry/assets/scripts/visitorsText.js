const visitorsInputs = document.querySelectorAll(".form_input");

function activeLabel(input, event) {
  const label = input.previousElementSibling;

  if (!event.target.value) {
    label.classList.remove("active_label");
  } else {
    label.classList.add("active_label");
  }
}

function addActiveLabelOnClick(input) {
  const label = input.previousElementSibling;
  label.classList.add("active_label");

  window.addEventListener("click", (event) => {
    if (!input.contains(event.target) && input.value === "") {
      label.classList.remove("active_label");
    }
  });
}
