import { validateEmail } from './mail.js';

document.getElementById('submitButton').addEventListener('click', function () {
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const consentCheckbox = document.getElementById('consentCheckbox');

    console.log(nameInput);
    console.log(nameInput.value);

    let isValid = true;

    if (nameInput.value.length < 2 || nameInput.value.length > 100) {
        nameInput.classList.add('error');
        isValid = false;
    } else {
        nameInput.classList.remove('error')
    };

    if (!validateEmail(emailInput.value)) {
        emailInput.classList.add('error');
        isValid = false;
    } else {
        emailInput.classList.remove('error');

    };

    if (!consentCheckbox.checked) {
        isValid = false;
    }

    if (isValid) {
        console.log('Formulario enviado correctamente!');
    }
});
