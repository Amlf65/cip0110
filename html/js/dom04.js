
const encabezado = document.getElementById("titulo");
const boton = document.getElementById("boton");

function cambiarEstilo() {
    encabezado.style.backgroundColor = "blue";
    
}

boton.addEventListener("click", cambiarEstilo);
