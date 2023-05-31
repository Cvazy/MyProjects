const next2 = document.getElementById('next2');
const step3 = document.getElementById('step3');

next2.onclick = () => {
    let width = window.innerWidth;
    if (step3.classList.toggle('open')) {
        next2.disabled = true;
        next2.style.background = '#F6F6F6'
        step3.style.display = 'inline-block'
        step3.style.marginLeft = '30px';
    } else {
        step3.style.display = 'none';
    }
}