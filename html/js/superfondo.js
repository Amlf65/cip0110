const fondo = document.getElementById('fondoInteractivo');

document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth - e.clientX * 3) / 5;  /* 1.5 para ajustar el movimiento */
    const y = (window.innerHeight - e.clientY * 3) /5;

    fondo.style.transform = `translate(${x}px, ${y}px)`;
});
