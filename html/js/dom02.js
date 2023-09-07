const titulo = document.getElementById("titulo");
const boton = document.getElementById("boton");

function cambiarContenido() {
    titulo.textContent = "¡Título cambiado!";
}

boton.addEventListener("click", cambiarContenido);
