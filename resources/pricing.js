document.getElementById('currency').addEventListener('change', (event) => {
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json', {})
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta del servidor:', data);
            let GBP = data.usd.gbp;
            let EUR = data.usd.eur;
            let value1 = 0
            let value2 = 25;
            let value3 = 60;
            let option = document.getElementById('currency');
            let basic = document.getElementById('basic');
            let pro = document.getElementById('pro');
            let premium = document.getElementById('premium');
            let symbol;

            if (option.value === "EUR") {
                value2 *= EUR;
                value3 *= EUR;
                symbol = '€';
            } else if (option.value === "GBP") {
                value2 *= GBP;
                value3 *= GBP;
                symbol = '£';
            } else if (option.value === "USD") {
                symbol = '$';
            }

            basic.textContent = `${symbol}${Math.round(value1)}`;
            pro.textContent = `${symbol}${Math.round(value2)}`;
            premium.textContent = `${symbol}${Math.round(value3)}`;

        })
        .catch(error => console.error('Error al enviar los datos:', error));
});

