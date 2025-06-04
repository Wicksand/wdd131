const credicCard = document.querySelector("#creditCardNumberContainer");
const payPal = document.querySelector("#paypalUsernameContainer");
const paymentMethod = document.querySelector("#paymentMethod");


function displayForm(){
    
    if (paymentMethod.value === "creditCard"){
        credicCard.classList.remove("hide");
        payPal.classList.add("hide");

    } else if(paymentMethod.value === "paypal"){
        payPal.classList.remove("hide");
        credicCard.classList.add("hide");

    }else{
        payPal.classList.add("hide");
        credicCard.classList.add("hide");
    }

}
paymentMethod.addEventListener('change',displayForm);