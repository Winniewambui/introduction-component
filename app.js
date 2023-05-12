const firstNameValue = document.getElementById('first_name').value;
const lastNameValue = document.getElementById('last_name').value;
const emailValue = document.getElementById('email').value;
const passwordValue = document.getElementById('password').value;
const button = document.getElementById('button-btn');

// const form = document.forms['form'];

button .addEventListener('click', checkInput);

function checkInput (e){
    e.preventDefault();

    // const firstNameValue = firstName.value.trim();
    // const lastNameValue = lastName.value.trim();
    // const emailValue = email.value.trim();
    // const passwordValue = password.value.trim();

if(firstNameValue === ''){
    setErrorFor(firstName, 'First name cannot be empty');
}else{
    setSUccessFor(firstName);
}
if (lastNameValue === '') {
    setErrorFor(lastName, 'Last name cannot be empty');
} else {
    setSuccessFor(lastName);
}
if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be empty');
} else if (passwordValue.length < 8) {
    setErrorFor(password, 'Password must be at least 8 characters long');
} else {
    setSuccessFor(password);
}

function setErrorFor(input, message){
     const formControl = input.parent;
     const small= formControl.querySelector('small');

      small.innerText = message;

     formControl.className = 'form-control error';
}
function setSuccessFor(input) {
    const formControl = input.parentNode;
    formControl.className = 'form-control success';
}



}


























// function error(element, msg){
// element.style.border = '2px solid red';
// const parent = element.parentNode;
// const p = parent.querySelector('#error-message');
// p.textContent = msg;
// p.style.visibility = 'visible';
// };
