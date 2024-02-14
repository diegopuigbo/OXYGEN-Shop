import { validateEmail } from './mail.js';

document.addEventListener('DOMContentLoaded', function () {
    const subscribePopup = document.getElementById('subscribePopup');
    const closePopupBtn = document.getElementById('closePopup');
    const subscribeBtn = document.getElementById('subscribeBtn');
    const emailInput = document.getElementById('email');

    const hasClosedPopup = localStorage.getItem('hasClosedPopup');
    if (!hasClosedPopup) {
        setTimeout(() => {
            showPopup();
        }, 5000);

        window.addEventListener('scroll', function () {
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercentage >= 25) {
                showPopup();
            }
        });
    }

    closePopupBtn.addEventListener('click', function () {
        markPopupAsClosed();
    });

    window.addEventListener('click', function (event) {
        if (event.target === subscribePopup) {
            markPopupAsClosed();
        }
    });

    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            markPopupAsClosed();
        }
    });

    subscribeBtn.addEventListener('click', function () {
        const email = emailInput.value.trim();

        if (validateEmail(email)) {
            console.log(`Suscrito con el correo: ${email}`);
            hidePopup();
            markUserAsSubscribed();
            markPopupAsClosed();
        } else {
            alert('Dirección de correo electrónico no válida. Por favor, introduce un correo válido.');
        }
    });

    function showPopup() {
        const hasClosedPopup = localStorage.getItem('hasClosedPopup');
        if (!hasClosedPopup) {
            subscribePopup.style.display = 'block';
        }
    }

    function hidePopup() {
        subscribePopup.style.display = 'none';
    }

    function markUserAsSubscribed() {
        localStorage.setItem('userSubscribed', 'true');
    }

    function markPopupAsClosed() {
        localStorage.setItem('hasClosedPopup', 'true');
        hidePopup();
    }
});