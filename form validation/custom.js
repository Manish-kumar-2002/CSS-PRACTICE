var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var formError = document.getElementById('form-error');

function phoneValidate(){
    var number = document.getElementById('input-number').value;
    if(number.length == 0){
        phoneError.innerHTML = 'Number is required'
        return false;
    }
    if(number.length !== 10){
        phoneError.innerHTML = 'Number should be 10 digits'
        return false;
    }
    else{
        phoneError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>'
        return true;
    }
}

function emailValidate(){
    var email = document.getElementById('input-email').value;
    if(email.length == 0){
        emailError.innerHTML = 'Email is required'
        return false;  
    }
}

function nameValidate(){
    var name = document.getElementById('input-name').value;
    if(name.length == 0){
        nameError.innerHTML = 'Name is required'
        return false;  
    }
}