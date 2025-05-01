let selectElm = document.querySelector('select');
let logo = document.querySelector('img');

selectElm.addEventListener('change', changeTheme);

function changeTheme(){
    let currentTheme = selectElm.value;
    if(currentTheme == 'dark'){
        //change body to dark
        const body = document.querySelector('body');
        body.classList.add("dark")
        //change logo to dark logo
        logo.setAttribute('src','byui-logo_white.png')

    } else{
        //remove dark class from body
        const body = document.querySelector('body');
        body.classList.remove("dark")
        //change logo to standard
        logo.setAttribute('src','byui-logo.webp')
    }
}