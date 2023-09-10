// Definiendo la URL de la API para obtener posts
const url = `https://jsonplaceholder.typicode.com/posts`;
// const url = `https://jsonplaceholder.typicode.com/users`; Nombre/Email (usuario.name/usuario.mail)
// const url = `https://jsonplaceholder.typicode.com/posts`; Autor/comentario (comentario.name/comentario.body)
// const url = `https://jsonplaceholder.typicode.com/albums`; Titulo (album.title)

// Haciendo la solicitud usando fetch
fetch(url)
    .then(response => response.json())  // Convertir la respuesta a formato JSON
    .then(posts => {
        posts.forEach(post => {
            console.log(`Título: ${post.title}`);  // Mostrar el título del post en consola
            console.log(`Contenido: ${post.body}`);  // Mostrar el contenido del post en consola
            console.log('---');
        });
    })
    .catch(error => {
        console.error("Error al obtener los posts:", error);
    });
