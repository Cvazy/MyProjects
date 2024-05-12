const visitorsInputs = document.querySelectorAll(".form_input");

function activeLabel(input, event) {
  const label = input.previousElementSibling;
  const inputWrapper = input.closest(".form_input_container");

  if (!event.target.value) {
    label.classList.remove("active_label");

    if (
      input.type === "number" ||
      input.id === "custom_alcohol_prefer" ||
      input.id === "custom_qnt_visitors"
    ) {
      label.classList.remove("active_number_label");
      inputWrapper.classList.remove("mt-2");
    }
  } else {
    label.classList.add("active_label");

    if (
      input.type === "number" ||
      input.id === "custom_alcohol_prefer" ||
      input.id === "custom_qnt_visitors"
    ) {
      label.classList.add("active_number_label");
      inputWrapper.classList.add("mt-2");
    }
  }
}

function addActiveLabelOnClick(input) {
  const label = input.previousElementSibling;
  const inputWrapper = input.closest(".form_input_container");
  label.classList.add("active_label");

  if (
    input.type === "number" ||
    input.id === "custom_alcohol_prefer" ||
    input.id === "custom_qnt_visitors"
  ) {
    label.classList.add("active_number_label");
    inputWrapper.classList.add("mt-2");
  }

  window.addEventListener("click", (event) => {
    if (!input.contains(event.target) && input.value === "") {
      label.classList.remove("active_label");

      if (
        input.type === "number" ||
        input.id === "custom_alcohol_prefer" ||
        input.id === "custom_qnt_visitors"
      ) {
        label.classList.remove("active_number_label");
        inputWrapper.classList.remove("mt-2");
      }
    }
  });
}
