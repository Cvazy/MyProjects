document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    closeLoader();
  }
};

function closeLoader() {
  setTimeout(() => {
    document.querySelector(".loader").style.opacity = "0";
  }, 1000);

  setTimeout(() => {
    document.querySelector(".loader").style.zIndex = "-1";
  }, 1850);
}

function openLoader() {
  document.querySelector(".loader").style.zIndex = "9999";
  document.querySelector(".loader").style.opacity = "1";
}
