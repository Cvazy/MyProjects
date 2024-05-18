allergyCheckbox.addEventListener("change", () => {
  if (allergyCheckbox.checked) {
    allergyText.classList.remove("d-none-imp");

    setTimeout(() => {
      allergyText.classList.add("form_input_visible");
      allergyText.classList.add("my");
    }, 1);
  } else {
    allergyText.classList.remove("form_input_visible");
    allergyText.classList.remove("my");
    allergyText.querySelector("input").classList.remove("error_input");

    setTimeout(() => {
      allergyText.classList.add("d-none-imp");
    }, 1);
  }
});
