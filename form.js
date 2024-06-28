const form = document.querySelector("#form")
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(validateInputs())
        window.location.replace("login.html")
})
function validateInputs(){
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
    const cpasswordVal = cpassword.value.trim()
  let success = true
    
    if(emailVal===''){
        success = false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        setError(email,'please enter a valid email')
    }
    else{
        setSuccess(email)
    }
    if(passwordVal ===''){
        success = false;
        setError(password,'password is reqiured')
    }
    else if(passwordVal.length<8){
        setError(password,'password must be atleast 8 character')

    }
    else{
        setSuccess(password)
    }
    if(cpasswordVal === ''){
        success = false;
        setError(cpassword,'Confirm password is required')
    }
    else if(cpasswordVal!=passwordVal){
        success = false;
        setError(cpassword,'password does not match')
    }
    else{
        setSuccess(cpassword)
    }
    return success;

}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')

}
function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')

}
const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); 
    };





