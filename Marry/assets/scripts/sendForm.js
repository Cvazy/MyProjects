const mainForm = document.querySelector(".main_form");
const modalWindow = document.querySelector(".modal");

function serializeForm(formNode) {
  const { elements } = formNode;

  return Array.from(elements)
    .filter((item) => !!item.name)
    .map((element) => {
      const { name, type } = element;
      const value =
        type === "checkbox" || type === "radio"
          ? element.checked
          : element.value;

      return { name, value };
    });
}

async function sendData(data) {
  return await fetch("api/internal/form/send/", {
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    body: data,
  });
}

async function handleFormSubmit() {
  const data = serializeForm(mainForm);
  return await sendData(data);
}

mainForm.addEventListener("submit", (event) => {
  event.preventDefault();
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
});
