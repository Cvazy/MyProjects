const mainForm = document.querySelector(".main_form");
const modalWindow = document.querySelector(".modal");
const inputNameVisitor = document.querySelector("#visitor_name");
const radioContainerBlocks = document.querySelectorAll(".radio_container");
const radioContainerVisitorBlock =
  radioContainerBlocks[0].querySelectorAll(".form_radio");
const radioContainerAlcoholBlock =
  radioContainerBlocks[1].querySelectorAll(".form_radio");

function checkRadioBlock(container) {
  container.forEach((block) => {
    if (block.querySelector("input").checked === false) {
      block.closest(".radio_container").classList.add("error_radio_block");

      return true;
    }
  });

  return false;
}

function removeErrorRadioClass(container) {
  container.forEach((block) => {
    if (block.querySelector("input").checked === false) {
      block.closest(".radio_container").classList.remove("error_radio_block");
    }
  });
}

inputNameVisitor.addEventListener("input", (event) => {
  if (event.target.value !== "") {
    inputNameVisitor.classList.remove("error_input");
  }
});

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

      obj[name] = value;
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

  let checkRadioVisitorBlock = checkRadioBlock(radioContainerVisitorBlock);
  let checkRadioAlcoholBlock = checkRadioBlock(radioContainerAlcoholBlock);

  if (inputNameVisitor.value === "") {
    inputNameVisitor.classList.add("error_input");

    return 0;
  } else if (checkRadioVisitorBlock || checkRadioAlcoholBlock) {
    return 0;
  } else {
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
