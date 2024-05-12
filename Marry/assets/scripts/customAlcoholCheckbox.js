const customPrefer = document.querySelector("#custom_prefer");
const customPreferBlock = document.querySelector(
  "#custom_alcohol_prefer_block",
);

customPrefer.addEventListener("change", () => {
  if (customPrefer.checked) {
    customPreferBlock.classList.remove("d-none-imp");

    setTimeout(() => {
      customPreferBlock.classList.add("active_indicate_of_guests");
    }, 1);
  } else {
    customPreferBlock.classList.remove("active_indicate_of_guests");

    setTimeout(() => {
      customPreferBlock.classList.add("d-none-imp");
    }, 300);
  }
});
