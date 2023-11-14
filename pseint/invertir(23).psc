Algoritmo InvertirTexto
	Escribir "Ingresa una palabra o frase:"
	Leer texto
	textoInvertido = ""
	Para i = longitud(texto) Hasta 1 Con Paso -1 Hacer
		textoInvertido = textoInvertido + subcadena(texto, i, i)
	FinPara
	Escribir textoInvertido
FinAlgoritmo