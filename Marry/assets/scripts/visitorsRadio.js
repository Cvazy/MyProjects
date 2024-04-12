const radioWrappers = document.querySelectorAll(".radio_container__wrapper");

radioWrappers.forEach((block) => {
  let visitorsRadios = block.querySelectorAll(".form_radio input");

  visitorsRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.checked) {
        visitorsRadios.forEach((el) => {
          el.checked = false;
        });

        radio.checked = true;
      }
    });
  });
});
