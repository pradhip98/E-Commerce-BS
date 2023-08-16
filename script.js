const plus = document.querySelector(`.plus`);
const minus = document.querySelector(`.minus`)
const inp = document.querySelector(`.quantity`)
plus.addEventListener(`click`, () => {
    inp.value++;
})
minus.addEventListener(`click`, () => {
    if (inp.value > 0) {
        inp.value--;
    }
    else {
        inp.value = 0;
    }

})
const home = document.querySelector(`.home`);
const form = document.querySelector(`.form`)
const cart = document.querySelector(`#cart`);
const navLink = document.querySelectorAll(`header .nav-link`);
let arr = []
for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener(`click`, () => {

        arr.push(navLink[i])
        navLink[i].classList.replace(`link`,`remove-link`)

        if (arr[0] !== navLink[i]) {
            arr[0].classList.replace("remove-link","link")
            arr.splice(0, 1);
        }
        else if (arr[1] === navLink[i]) {
            arr.splice(0, 1);
        }
        if (navLink[i] !== navLink[0]) {
            navLink[0].classList.replace("remove-link","link");
            cart.style.display = `none`
            form.style.display = `none`
            form2.style.display = `none`;
            home.style.display = `none`;
        }
        else if (navLink[i] === navLink[0]) {
            navLink[0].classList.replace("link","remove-link");
            cart.style.display = `none`
            form.style.display = `none`
            form2.style.display = `none`;
            home.style.display = `block`;

        }
        if (i === 2) {
            cart.style.display = `block`
            form.style.display = `none`
            form2.style.display = `none`;
            home.style.display = `none`;
        }
        else if (i === 1) {
            cart.style.display = `none`
            form.style.display = `block`
            form2.style.display = `none`;
            home.style.display = `none`;
        }
        console.log(arr)
    })
}


const form2 = document.querySelector(`.form2`)
const signup = document.querySelector(`.signup`);
signup.addEventListener(`click`, () => {
    form.style.display = `none`;
    form2.style.display = `block`;
})
const signin=document.querySelector(`.signin`);
signin.addEventListener(`click`, () => {
    form.style.display = `block`;
    form2.style.display = `none`;
})

let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slider-image");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }

const signupVerify = document.querySelector(`.sign-up`);
const fname=document.querySelector(`#fname`)
const lname=document.querySelector(`#lname`)
const number=document.querySelector(`#number`)
const email=document.querySelector(`#email`)
const pass=document.querySelector(`#pass`)
const cpass=document.querySelector(`#cpass`)


signupVerify.addEventListener(`submit`,(e)=>{
    e.preventDefault()
    verifyForm()
})

function verifyForm(){
const fnameVal=fname.value.trim()
const lnameVal=lname.value.trim()
const numberVal=number.value.trim()
const emailVal=email.value.trim()
const passwordVal=pass.value.trim()
const cpasswordVal=cpass.value.trim()

if(fnameVal !== ``){
    setSuccess(fname)
}
else{
    setError(fname,`Please enter your first name`)
}
if(lnameVal !== ``){
    setSuccess(lname)
}
else{
    setError(lname,`Please enter your last name`)
}
if(numberVal !== `` && numberVal.length == 10){
    setSuccess(number)
}
else{
    setError(number,`Please enter your 10 digit mobile number`)
}
if(emailVal !== `` && emailVal.type === email){
    setSuccess(email)
}
else if(emailVal.type !== email){
    setError(email,`Please enter a valid email address`)
}
else{
    setError(email,`Please enter your email address`)
 }
if(passwordVal !== `` && passwordVal.length >= 8){
    setSuccess(pass)
}
else if(passwordVal.length < 8){
    setError(pass,`Please enter a password with eight characters`)
}
else{
    setError(pass,`Please enter a password`)
}
if(cpasswordVal !== `` && cpasswordVal === passwordVal){
    setSuccess(cpass)
}
else if(cpasswordVal !== passwordVal){
    setError(cpass,`Please enter a password with eight characters`)
}
else{
    setError(cpass,`Please confirm your password`)
}

}

function setError(element,message){
    
    const inputGroup = element.parentElement;
    const errorElement =inputGroup.querySelector(`.error`)
    const input = inputGroup.querySelector(` .form-control`)
   input.classList.add(`err`);
    input.classList.remove(`success`);
    errorElement.innerText = message;
}
function setSuccess(element){

    const inputGroup = element.parentElement;
    const errorElement =inputGroup.querySelector(`.error`)
    const input = inputGroup.querySelector(` .form-control`)
   input.classList.add(`success`);
    input.classList.remove(`err`);
    errorElement.innerText = ``;
}


