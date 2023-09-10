// let & const ****************************************************
    if (true) {
        let temporal = "Temporal";
        const CONSTANTE = "Inmutable";
        console.log(temporal);
        console.log(CONSTANTE);
    }
    //console.log(temporal);
    //console.log(CONSTANTE);
    // `temporal` y `CONSTANTE` no están disponibles fuera del bloque

// Arrow Functions: *********************************************
    //   const suma = (a, b) => a + b;

    //   function suma(a, b) { return a + b;}
    const numeros = [1, 2, 3];
    const doble = numeros.map(numero => numero * 2); // [2, 4, 6]
    console.log(numeros);
    console.log(doble);

//Template Strings
    let nombre = "Juan";
    let saludo = `Hola, ${nombre}!`;
    

//Parámetros por defecto:
    function saludar(nombre = "Mundo") {
        return `Hola, ${nombre}!`;
  }
    console.log(saludar()); // "Hola, Mundo!"

//Desestructuración
    let [x, y] = [1, 2]; // x=1, y=2

    let persona = { apodo: "Ana", edad: 25 };
    let { apodo, edad } = persona; // apodo="Ana", edad=25
    console.log(apodo)
    console.log(edad)
  
//Clases
    class Persona {
        constructor(nombre) {
        this.nombre = nombre;
        }
    
        saludar() {
        return `Hola, ${this.nombre}!`;
        }
    }
    const yo = new Persona("Adolfo");
    console.log(yo.nombre)
    console.log(yo.saludar()) 

//Iteradores y For-Of:
    const frutas = ["manzana", "plátano", "cereza"];
    for (let fruta of frutas) {
    console.log(fruta);
    }
