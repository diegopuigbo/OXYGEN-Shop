import { validateEmail } from './mail.js';

document.addEventListener('DOMContentLoaded', function () {
    const subscribePopup = document.getElementById('subscribePopup');
    const closePopupBtn = document.getElementById('closePopup');
    const subscribeBtn = document.getElementById('subscribeBtn');


    setTimeout(() => {
        if (!hasUserSubscribed()) {
            showPopup();
        }
    }, 5000);

    window.addEventListener('scroll', function () {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercentage >= 25 && !hasUserSubscribed()) {
            showPopup();
        }
    });


    closePopupBtn.addEventListener('click', function () {
        hidePopup();
    });


    window.addEventListener('click', function (event) {
        if (event.target === subscribePopup) {
            hidePopup();
        }
    });


    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            hidePopup();
        }
    });


    subscribeBtn.addEventListener('click', function () {
        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();

        if (validateEmail(email)) {
            console.log(`Suscrito con el correo: ${email}`);
            hidePopup();
            markUserAsSubscribed();
        } else {
            alert('Dirección de correo electrónico no válida. Por favor, introduce un correo válido.');
        }
    });


    function showPopup() {
        subscribePopup.style.display = 'block';
    }


    function hidePopup() {
        subscribePopup.style.display = 'none';
    }

    function markUserAsSubscribed() {
        localStorage.setItem('userSubscribed', 'true');
    }


    function hasUserSubscribed() {
        return localStorage.getItem('userSubscribed') === 'true';
    }
});
