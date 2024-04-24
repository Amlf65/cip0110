const botonesTabs = document.querySelectorAll('.boton-tab');
const contenidosTabs = document.querySelectorAll('.contenido-tab');

botonesTabs.forEach(function(boton, index) {
    boton.addEventListener('click', function() {
        contenidosTabs.forEach(function(contenido) {
            contenido.style.display = 'none';
        });
        contenidosTabs[index].style.display = 'block';
    });
});

