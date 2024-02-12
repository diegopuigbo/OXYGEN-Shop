document.getElementById('submitButton').addEventListener('click', function () {

    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const consent = document.getElementById('consentCheckbox').checked;


    const formData = {
        name: name,
        email: email,
        consent: consent
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json()
            .then(data => {
                console.log('Respuesta del servidor:', data);
            }))
        .catch(error => console.error('Error al enviar los datos:', error));
}); 