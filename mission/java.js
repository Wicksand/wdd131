let selectElm = document.querySelector('select');
let logo = debuggerocument.querySelector('img');

selectElm.addEventListener('change', changeTheme);

function changeTheme(){
    let currentTheme = selectElm.value;
    if(currentTheme == 'dark'){
        //change body to dark
        //change logo to dark logo

    } else{
        //remove dark class from body
        //change logo to standard
    }
}