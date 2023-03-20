const nav = document.getElementById('nav');
const navBtn = document.getElementById('nav-btn');
const navBtnImg = document.getElementById('nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "static/img/close.png";
    } else {
        navBtnImg.src = "static/img/menu.png";
    }
}