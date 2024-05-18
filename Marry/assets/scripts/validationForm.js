const modalWindow = document.querySelector(".modal");
const inputNameVisitor = document.querySelector("#visitor_name");

const allergyInput = allergyText.querySelector("input");

const radioContainerBlocks = document.querySelectorAll(".radio_container");
const radioContainerVisitorBlock =
  radioContainerBlocks[0].querySelectorAll(".form_radio");
const radioContainerAlcoholBlock =
  radioContainerBlocks[1].querySelectorAll(".form_radio");

const visitorCustomCheckbox = document.querySelector("#visitor_custom");
const customQntVisitors = document.querySelector("#custom_qnt_visitors");

const customAlcoholPrefer = document.querySelector("#custom_alcohol_prefer");

function addErrorClassOnRadioContainer(array) {
  array.forEach((block) => {
    block.closest(".radio_container").classList.add("error_radio_block");
  });
}

function removeErrorClassFromTextInput(input) {
  input.addEventListener("input", (event) => {
    if (event.target.value !== "") {
      input.classList.remove("error_input");
    }
  });
}

removeErrorClassFromTextInput(inputNameVisitor);
removeErrorClassFromTextInput(allergyInput);

function removeErrorRadioClass(container) {
  container.forEach((block) => {
    if (block.querySelector("input").checked === false) {
      block.closest(".radio_container").classList.remove("error_radio_block");
    }
  });
}

function checkRadioBlock(container) {
  return Array.from(container).some(
    (block) => block.querySelector("input").checked,
  );
}

function validationForm() {
  let checkRadioVisitorBlock = checkRadioBlock(radioContainerVisitorBlock);
  let checkRadioAlcoholBlock = checkRadioBlock(radioContainerAlcoholBlock);

  let checkValidation = true;

  if (inputNameVisitor.value === "") {
    inputNameVisitor.classList.add("error_input");

    checkValidation = false;
  }

  if (!checkRadioVisitorBlock) {
    addErrorClassOnRadioContainer(radioContainerVisitorBlock);

    checkValidation = false;
  } else {
    removeErrorRadioClass(radioContainerVisitorBlock);
  }

  if (!checkRadioAlcoholBlock) {
    addErrorClassOnRadioContainer(radioContainerAlcoholBlock);

    checkValidation = false;
  } else {
    removeErrorRadioClass(radioContainerAlcoholBlock);
  }

  if (visitorCustomCheckbox.checked && customQntVisitors.value === "") {
    customQntVisitors.classList.add("error_input");

    checkValidation = false;
  }

  if (customPrefer.checked && customAlcoholPrefer.value === "") {
    customAlcoholPrefer.classList.add("error_input");

    checkValidation = false;
  }

  if (allergyCheckbox.checked && allergyInput.value === "") {
    allergyInput.classList.add("error_input");

    checkValidation = false;
  }

  return checkValidation;
}
