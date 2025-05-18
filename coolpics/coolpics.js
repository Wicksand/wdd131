//general query selects
const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#pages');
const gallery = document.querySelector('.gallery')


//toggle menu
btn.addEventListener('click', toggleMenu);
function toggleMenu(){
    menu.classList.toggle('hide');
}

//hide and display menu when size of screen changes
function handleResize(){
    if (window.innerWidth > 1000){
        pages.classList.remove("hide");
    }else{
        menu.classList.add("hide");
    }
}

const modal = document.createElement("dialog");
modal.innerHTML = `<img id="bigImg"><button class="close-viewer">X</button>`;
document.body.appendChild(modal);

//displays model when an img is clicked
gallery.addEventListener('click', showLargeImage);
function showLargeImage(event){
    const imgClick = event.target.closest('img');
    if(!imgClick) return;
    
    const src = imgClick.getAttribute('src')
    const alt = imgClick.getAttribute('alt')

    const bigName =  src.split('-')[0] + '-full.jpeg';
    
    const modalImg = document.querySelector('#bigImg')
    modalImg.setAttribute('src',bigName);
    modal.showModal();
}

modal.addEventListener('click',(event)=>{
    if(event.target === modal){
        modal.close();
    }
})

const closebutton = modal.querySelector('.close-viewer');

closebutton.addEventListener('click',() => {
    modal.close();
});

handleResize();
window.addEventListener("resize", handleResize);


