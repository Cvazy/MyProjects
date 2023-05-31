const nav = document.getElementById('nav');
const navBtnOpen = document.getElementById('nav-btn');
const navBtnOpenImg = document.getElementById('nav-btn-img');

navBtnOpen.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnOpenImg.src = "../../../images/close.png";
    } else {
        navBtnOpenImg.src = "../../../images/burg-menu.png";
    }
}