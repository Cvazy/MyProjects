const mainForm = document.querySelector(".main_form");

function serializeForm(formNode) {
  const { elements } = formNode;

  return Array.from(elements)
    .filter((item) => !!item.name)
    .reduce((obj, element) => {
      const { name, type } = element;
      const value =
        type === "checkbox" || type === "radio"
          ? element.checked
          : element.value;

      if (value !== "" && value !== false) {
        obj[name] = value;
      }

      return obj;
    }, {});
}

async function sendData(data) {
  return await fetch("api/internal/form/send/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

async function handleFormSubmit() {
  const data = serializeForm(mainForm);

  return await sendData(data);
}

mainForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const validationStatus = validationForm();

  if (validationStatus) {
    removeErrorRadioClass(radioContainerVisitorBlock);
    removeErrorRadioClass(radioContainerAlcoholBlock);
    openLoader();

    handleFormSubmit().then((status) => {
      closeLoader();

      modalWindow.style.zIndex = "9999";
      modalWindow.classList.add("modal_visible");

      if (!status.ok) {
        successRegisterTitle.textContent = "Произошла ошибка";
        successRegisterText.textContent =
          "Пожалуйста, обратитесь к Андрею за помощью для получения дополнительной информации";
      }
    });
  }
});
