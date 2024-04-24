const fondo = document.getElementById('fondoInteractivo');
const pantalla = document.getElementById('pantalla');

pantalla.addEventListener('mousemove', (e) => {
    const x = e.clientX /2.4 ;  /* 1.5 para ajustar el movimiento */
    const y = e.clientY /2.4 ;

    fondo.style.transform = `translate(${x}px, ${y}px)`;
});
