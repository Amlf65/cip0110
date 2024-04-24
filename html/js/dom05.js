
const encabezado = document.getElementById("titulo");
const boton = document.getElementById("boton");

function agregarParrafo() {
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Este es un nuevo párrafo.";
    document.body.appendChild(nuevoParrafo);

    //document.body.removeChild(nuevoParrafo); 
}

boton.addEventListener("click", agregarParrafo);
