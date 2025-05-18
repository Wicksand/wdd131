const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#pages');

btn.addEventListener('click', toggleMenu);

function toggleMenu(){
    menu.classList.toggle('hide');
}

function handleResize(){
    const menu = document.querySelector("#pages");
    if (window.innerWidth > 1000){
        pages.classList.remove("hide");
    }else{
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);


