const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#pages');

btn.addEventListener('click', toggleMenu);

function toggleMenu(){
menu.classList.toggle('hide');
}

handleResize(){
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 100){
        menu.classList.remove("hide")
    }else{
        menu.classList.add("hide")
    }
}

handleResize();
window.addEventListener("resize", handleResize);


