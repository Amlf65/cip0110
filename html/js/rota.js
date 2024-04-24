const imagen3D = document.getElementById('imagen3D');

document.addEventListener('mousemove', (e) => {
    const x = -(window.innerHeight / 2 - e.clientY) / 10;
    const y = (window.innerWidth / 2 - e.clientX) / 10;

    imagen3D.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
});
