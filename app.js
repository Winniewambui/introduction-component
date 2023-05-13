const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email= document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('button-btn');
// const firstNameValue = document.getElementById('first_name').value;
// const lastNameValue = document.getElementById('last_name').value;
// const emailValue = document.getElementById('email').value;
// const passwordValue = document.getElementById('password').value;
// const button = document.getElementById('button-btn');

// const form = document.forms['form'];

button.addEventListener('click', checkInput);

function checkInput (e){
    e.preventDefault();   
     const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

if(firstNameValue === ''){
    setErrorFor(firstName, 'First name cannot be empty');
}else{
    setSuccessFor(firstName);
}
if (lastNameValue === '') {
    setErrorFor(lastName, 'Last name cannot be empty');
} else {
    setSuccessFor(lastName);
}
if (emailValue ===''){
    setErrorFor(email, ' Email cannot be empty');
} else{
    setSuccessFor(email);
}
if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be empty');
    
} else if (passwordValue.length < 8) {
    setErrorFor(password, 'Password must be at least 8 characters long');
} else {
    setSuccessFor(password);
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
     input.style.border = '2px solid red';
     const small= formControl.querySelector('small');
     small.innerText = message;
     small.style.visibility = 'visible'
     small.style.color = ' hsl(0, 93%, 68%)';
     formControl.className = 'form-control error';


}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    input.style.border = '2px solid green';
    const small= formControl.querySelector('small');
    small.style.visibility ='hidden';
    formControl.className = 'form-control success';
}



}

// const firstNameValue = document.getElementById('first_name').value;
// const lastNameValue = document.getElementById('last_name').value;
// const emailValue = document.getElementById('email').value;
// const passwordValue = document.getElementById('password').value;
// const button = document.getElementById('button-btn');
// button.addEventListener('submit', checkInput);

// function checkInput (e){
//     e.preventDefault();
  

//     if(firstNameValue === ''){
//         setErrorFor(document.getElementById('first_name'), 'First name cannot be empty');
//     } else {
//         setSuccessFor(document.getElementById('first_name'));
//     }
    
//     if (lastNameValue === '') {
//         setErrorFor(document.getElementById('last_name'), 'Last name cannot be empty');
//     } else {
//         setSuccessFor(document.getElementById('last_name'));
//     }
//     if (passwordValue === '') {
//         setErrorFor(document.getElementById('password'), 'Password cannot be empty');
//     } else if (passwordValue.length < 8) {
//         setErrorFor(document.getElementById('password'), 'Password must be at least 8 characters long');
//     } else {
//         setSuccessFor(document.getElementById('password'));
//     }
// }

// function setErrorFor(input, message){
//     const formControl = input.parentNode;
//     const small= formControl.querySelector('small');

//     small.innerText = message;

//     formControl.className = 'form-control error';
// }

// function setSuccessFor(input) {
//     const formControl = input.parentNode;
//     formControl.className = 'form-control success';
// }
// console.log(firstNameValue);

























// function error(element, msg){
// element.style.border = '2px solid red';
// const parent = element.parentNode;
// const p = parent.querySelector('#error-message');
// p.textContent = msg;
// p.style.visibility = 'visible';
// };
