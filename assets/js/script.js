const container = document.querySelector(".container");
const subBtn = document.querySelector(".subscribe_btn");
const disBtn = document.querySelector(".dismiss_btn");
const innerContainer = document.querySelector(".inner-container");
const span = document.querySelector(".span");
const emailInput = document.querySelector("#emailInput");
const validMessage = document.querySelector("#validMessage");


const formVlidation = () => {
    const userEmail = emailInput.value;
    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let result = regex.test(userEmail);
    if (result) {
        container.style.display="none";
        innerContainer.classList.remove("display");
        span.textContent = userEmail;
        emailInput.value=""
        return true;
    } else {
        validMessage.classList.remove("display")
        emailInput.classList.add("input_clr")
        return false
    }
}
if (subBtn) {
    subBtn.addEventListener("click", (e) => {
        e.preventDefault()
        formVlidation()
    })
}

if (disBtn) {
    disBtn.addEventListener("click", (e) => {
        e.preventDefault();
        innerContainer.classList.remove("display");
    })
}
