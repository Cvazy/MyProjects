const visitorsRadios = document.querySelectorAll(".visited_checkbox");
const indicateOfGuests = document.querySelector("#indicate_of_guests");
const alcoholPreference = document.querySelector("#alcohol_preference");
const alcoholCheckboxes = alcoholPreference.querySelectorAll(".form_radio");
const togglePillColor = document.querySelector(".toggle-pill-color");
const allergyBlock = document.querySelector("#allergyText");
const musicContainer = document.querySelector(".music_container");
const successRegisterText = document.querySelector(".success_register__text");
const successRegisterTitle = document.querySelector(".success_register__title");

const notVisitedText = "Благодарим за ответ!";

const visitedText =
  "Благодарим вас за заполнение анкеты! Мы обязательно возьмём в учёт ваши пожелания. Будем очень рады видеть вас на нашей свадьбе!";

visitorsRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.checked) {
      visitorsRadios.forEach((el) => {
        el.checked = false;
      });

      radio.checked = true;

      setVisibilityFormBlocks(true);

      successRegisterText.textContent = visitedText;

      if (radio.id === "visitor_custom") {
        indicateOfGuests.classList.remove("d-none-imp");

        setTimeout(() => {
          indicateOfGuests.classList.add("active_indicate_of_guests");
        }, 1);
      } else if (radio.id === "not_visited") {
        setVisibilityFormBlocks(false);
        indicateOfGuests.classList.remove("active_indicate_of_guests");

        setTimeout(() => {
          indicateOfGuests.classList.add("d-none-imp");
        }, 300);

        successRegisterText.textContent = notVisitedText;
      } else {
        indicateOfGuests.classList.remove("active_indicate_of_guests");

        setTimeout(() => {
          indicateOfGuests.classList.add("d-none-imp");
        }, 300);
      }
    }
  });
});

function setVisibilityFormBlocks(visible) {
  if (visible) {
    alcoholPreference.classList.remove("hidden_form_block");
    togglePillColor.classList.remove("hidden_form_block");
    allergyBlock.classList.remove("hidden_form_block");
    musicContainer.classList.remove("hidden_form_block");
  } else {
    alcoholPreference.classList.add("hidden_form_block");
    togglePillColor.classList.add("hidden_form_block");
    allergyBlock.classList.add("hidden_form_block");
    musicContainer.classList.add("hidden_form_block");
  }
}

alcoholCheckboxes.forEach((block) => {
  const circleSpan = block.querySelector(".circle_checkbox_span");

  circleSpan.addEventListener("click", () => {
    circleSpan.nextElementSibling.click();
  });
});