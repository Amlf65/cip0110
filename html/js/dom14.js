document.getElementById('botonAnimar').addEventListener('click', function() {
    const texto = document.getElementById('textoAnimar');
    texto.style.transition = 'all 1s';
    texto.style.color = 'red';
    texto.style.fontSize = '24px';
    texto.style.marginLeft = '50px';
});


