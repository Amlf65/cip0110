
const encabezado = document.getElementById("titulo");
const boton = document.getElementById("boton");

function cambiarEstilo() {
    encabezado.style.color = "blue";
    
}

boton.addEventListener("click", cambiarEstilo);
