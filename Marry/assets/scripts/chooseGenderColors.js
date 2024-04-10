const genderTabs = document.querySelectorAll(".gender_tab");
const genderColorsBlocks = document.querySelectorAll(".dress_code_container");

genderTabs.forEach((btn) => {
  btn.addEventListener("click", () => {
    const activeTab = btn.getAttribute("data-gender-tab");
    const newActiveRow = document.querySelector(
      `[data-gender-block="${activeTab}"]`,
    );

    genderTabs.forEach((el) => {
      el.classList.remove("gender_active");
    });

    genderColorsBlocks.forEach((block) => {
      block.classList.remove("dress_code_active");
    });

    btn.classList.add("gender_active");
    newActiveRow.classList.add("dress_code_active");
  });
});
