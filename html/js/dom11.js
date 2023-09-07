const imagen = document.getElementById('imagenZoom');
imagen.addEventListener('mouseover', function() {
    imagen.style.transform = 'scale(1.5)';
});
imagen.addEventListener('mouseout', function() {
    imagen.style.transform = 'scale(1)';
});



