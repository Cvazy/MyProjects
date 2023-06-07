const nav = document.getElementById('nav');
const navBtn = document.getElementById('nav-btn');
const navBtnImg = document.getElementById('nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "public/images/close.png";
        navBtn.style.zIndex = "50";
    } else {
        navBtnImg.src = "public/images/burger.png";
    }
}