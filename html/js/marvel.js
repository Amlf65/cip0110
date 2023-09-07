const publicKey = 'TU_CLAVE_PUBLICA';
const privateKey = 'TU_CLAVE_PRIVADA';

// Generar un sello de tiempo
const ts = new Date().getTime();

// Generar el hash que Marvel requiere (md5(ts + privateKey + publicKey))
const crypto = require('crypto');
const hash = crypto.createHash('md5').update(ts + privateKey + publicKey).digest('hex');

// Construir la URL para, por ejemplo, obtener personajes
const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

// Usar la API Fetch para hacer la solicitud
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Procesa y muestra los datos aquí...
  })
  .catch(error => {
    console.log('There was a problem with the fetch operation:', error.message);
  });
