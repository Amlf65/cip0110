Algoritmo sin_titulo
	//leer numero de opciones en respuestas múltiples
	Escribir "Nº de opciones multiples"
	leer opciones
	// Leer aciertos y errores en opciones multiples
	Escribir "Aciertos en opciones múltiples"
	leer aciertos1
	Escribir  "errores en opciones múltiples"
	leer errores1
	// Leer aciertos y errores en verdadero/falso
	Escribir "Aciertos en verdadero/falso"
	leer aciertos2
	Escribir  "errores en verdadero/falso"
	leer errores2
	// Leer aciertos en respuestas simples
	Escribir "Aciertos en respuestas simples"
	leer aciertos3
	//el divisor es el numero de opciones - 1
	divisor=opciones-1
	//calcula puntos opciones múltiples
	calculo1=aciertos1 - (errores1/divisor)
	//calcula puntos verdadero / falso
	calculo2=aciertos2 - errores2
	//calcula puntos respuestas simples
	calculo3=aciertos3
	//calcula puntos opciones múltiples
	final=(calculo1+calculo2+calculo3)*0.33
	//Presenetar resultado
	Escribir "Nota final : ", final
FinAlgoritmo
