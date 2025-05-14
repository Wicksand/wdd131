const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#pages');

btn.addEventListener('click', toggleMenu);

function toggleMenu(){
menu.classList.toggle('hide');
}