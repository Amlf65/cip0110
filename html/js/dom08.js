let contador = 0;
document.getElementById('botonContador').addEventListener('click', function() {
    contador++;
    document.getElementById('textoContador').textContent = 'Contador: ' + contador;
});



