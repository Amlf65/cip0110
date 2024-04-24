document.getElementById('formulario').addEventListener('submit', function(event) {
    const input = document.getElementById('campo');
    if (!input.value) {
        event.preventDefault();
        alert('El campo no puede estar vacío');
    }
});




