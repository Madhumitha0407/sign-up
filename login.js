const form = document.querySelector("#loginform")
const email = document.querySelector("#loginemail");
const password = document.querySelector("#loginpassword");


loginform.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(validateInputs())
        window.location.replace("todo.html")
})
function validateInputs(){
    const emailVal = loginemail.value.trim()
    const passwordVal = loginpassword.value.trim()
    
  let success = true
    
    if(emailVal===''){
        success = false;
        setError(loginemail,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        setError(loginemail,'please enter a valid email')
    }
    else{
        setSuccess(email)
    }
    if(passwordVal ===''){
        success = false;
        setError(loginpassword,'password is reqiured')
    }
    else if(passwordVal.length<8){
        success = false;
        setError(loginpassword,'password must be atleast 8 character')

    }
    else{
        setSuccess(password)
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





