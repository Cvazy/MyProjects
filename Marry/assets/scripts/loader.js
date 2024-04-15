document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    setTimeout(() => {
      document.querySelector(".loader").style.opacity = "0";
    }, 1000);

    setTimeout(() => {
      document.querySelector(".loader").style.zIndex = "-1";
    }, 1850);
  }
};
