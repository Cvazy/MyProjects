const musicList = document.querySelector(".music_list");
const newMusic = document.querySelector(".add_music");

function createFormInput(nameCount) {
  // Создаем элементы
  let formInputContainer = document.createElement("div");
  let removeMusicButton = document.createElement("button");
  let deleteIcon = document.createElement("img");
  let formInput = document.createElement("div");
  let label = document.createElement("label");
  let input = document.createElement("input");

  formInputContainer.className = "form_input_container";

  removeMusicButton.type = "button";
  removeMusicButton.className = "remove_music";
  removeMusicButton.setAttribute("onclick", "musicDelete(this)");

  deleteIcon.src = "assets/images/icons/delete.svg";
  deleteIcon.alt = "Delete";
  deleteIcon.loading = "lazy";

  formInput.className = "form_input";

  label.htmlFor = "visitor_music";
  label.textContent = "Ваша любимая музыка";

  input.id = "visitor_music";
  input.type = "text";
  input.name = `visitor_music${nameCount}`;
  input.setAttribute("oninput", "activeLabel(this, event)");
  input.setAttribute("onclick", "addActiveLabelOnClick(this)");

  removeMusicButton.appendChild(deleteIcon);
  formInput.appendChild(label);
  formInput.appendChild(input);
  formInputContainer.appendChild(removeMusicButton);
  formInputContainer.appendChild(formInput);

  return formInputContainer;
}

newMusic.addEventListener("click", () => {
  let counterChildrenMusicBlock = musicList.childElementCount;

  if (counterChildrenMusicBlock < 4) {
    musicList.appendChild(createFormInput(counterChildrenMusicBlock));
  } else if (counterChildrenMusicBlock === 4) {
    musicList.appendChild(createFormInput(counterChildrenMusicBlock));
    newMusic.classList.add("d-none-imp");
  }
});

function musicDelete(btn) {
  btn.parentNode.remove();
  newMusic.classList.remove("d-none-imp");
}
