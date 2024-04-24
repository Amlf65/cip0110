
    const entrada = document.getElementById('entrada');
    const lista = document.getElementById('lista');
    entrada.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && entrada.value) {
            let nuevoItem = document.createElement('li');
            nuevoItem.textContent = entrada.value;
            nuevoItem.addEventListener('click', function () {
                lista.removeChild(nuevoItem);
            });
            lista.appendChild(nuevoItem);
            entrada.value = '';
        }
    });


