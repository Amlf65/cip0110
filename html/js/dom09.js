const seccion = document.getElementById('seccion');
document.getElementById('botonOcultarMostrar').addEventListener('click', function() {
    if (seccion.style.display !== 'none') {
        seccion.style.display = 'none';
    } else {
        seccion.style.display = 'block';
    }
});




