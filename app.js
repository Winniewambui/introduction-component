const firstNameInput = document.getElementById('first_name');
const lastNameInput = document.getElementById('last_name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const addForm = document.forms['form'];
addForm.addEventListener('submit', component);

function component (e) {
    e.preventDefault();

    const cautionMsg = document.querySelector('.hide');
    if (
        firstNameInput.value === '' ||
        lastNameInput.value === '' ||
        emailInput.value === '' ||
        passwordInput.value === ''
    ) {
        cautionMsg.style.display = 'inline';
        // cautionMsg.style.height =`${ cautionMsg.scrollHeight}px`;
    } else {
        cautionMsg.style.height = '0px';
    }
}
    



