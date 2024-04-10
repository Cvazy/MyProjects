const scrollingBtn = document.querySelector(".scroll_top");
const secondSection = document.querySelector(".hello_section");

window.addEventListener("scroll", () => {
  let secondTopPosition = secondSection.getBoundingClientRect();

  if (secondTopPosition.top < 0) {
    scrollingBtn.classList.add("opacity-100");
  } else {
    scrollingBtn.classList.remove("opacity-100");
  }
});

scrollingBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
