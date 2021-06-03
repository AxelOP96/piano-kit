document.body.style.backgroundImage = 'background.svg';

const colors = [];
function change(e) {
    const c = document.getElementsByClassName('.sound');
    c.addEventListener('click', change);
}