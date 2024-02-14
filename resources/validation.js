
import { validateEmail } from './mail.js';

document.getElementById('submitButton').addEventListener('click', function () {
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const consentCheckbox = document.getElementById('consentCheckbox');

    console.log(nameInput);
    console.log(nameInput.value);

    let isValid = true;


    nameInput.style.border = '1px solid #ccc';
    emailInput.style.border = '1px solid #ccc';
    consentCheckbox.style.border = '1px solid #ccc';

    if (nameInput.value.length < 2 || nameInput.value.length > 100) {
        nameInput.classList.add('error');
        nameInput.style.border = '1px solid red';
        isValid = false;
        alert('El nombre debe tener entre 2 y 100 caracteres.');
    } else {
        nameInput.classList.remove('error');
        nameInput.style.border = '1px solid #ccc';
    }


    if (!validateEmail(emailInput.value)) {
        emailInput.classList.add('error');
        emailInput.style.border = '1px solid red';
        isValid = false;
        alert('El correo electrónico no es válido.');
    } else {
        emailInput.classList.remove('error');
        emailInput.style.border = '1px solid #ccc';

    }


    if (!consentCheckbox.checked) {
        consentCheckbox.style.border = '1px solid red';
        isValid = false;
        alert('Debes aceptar la política de privacidad.');
    } else {
        consentCheckbox.style.border = '1px solid #ccc';
    }

    if (isValid) {
        console.log('Formulario enviado correctamente!');
    }
});