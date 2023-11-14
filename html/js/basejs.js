document.addEventListener("DOMContentLoaded",function(){
    //ejecucion al cargar  el DOM
    const boton = document.getElementById("boton");
    const entrada = document.getElementById("entrada");
    const salida = document.getElementById("salida");
    // Agregar un escuchador de eventos para el clic del botón
    boton.addEventListener("click", function() {
        //leer el valor
        let valor=entrada.value;
        if(valor=="" || isNaN(valor))  {
            salida.textContent="Debes introducir un valor";
        }else{
        valor=parseInt(valor);
        fact=1;
        for (i=1;i<=valor;i++){
            fact=fact*i
        }
        salida.innerHTML=`El factorial de ${valor} es ${fact}` ;
        }
    });
    entrada.addEventListener("focus",function(){
        entrada.classList.add("fondo");
        entrada.select();
        salida.textContent="";
    })
});
