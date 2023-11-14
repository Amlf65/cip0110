let link = document.querySelector("a");
console.log(link.getAttribute("href"));

//const titulo = document.getElementById("titulo");
const boton = document.getElementById("boton");

 function cambiarAttr() {
    // titulo.textContent = "¡Título cambiado!";
    link.setAttribute("href", "https://www.w3schools.com/");
    link.textContent="https://www.w3schools.com";
}

boton.addEventListener("click", cambiarAttr);
