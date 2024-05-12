const visitorsRadios = document.querySelectorAll(".visited_checkbox");
const indicateOfGuests = document.querySelector("#indicate_of_guests");
const alcoholPreference = document.querySelector("#alcohol_preference");
const togglePillColor = document.querySelector(".toggle-pill-color");
const allergyBlock = document.querySelector("#allergyText");
const musicContainer = document.querySelector(".music_container");

visitorsRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.checked) {
      visitorsRadios.forEach((el) => {
        el.checked = false;
      });

      radio.checked = true;

      setVisibilityFormBlocks(true);

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
