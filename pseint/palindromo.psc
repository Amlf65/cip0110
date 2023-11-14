Algoritmo palindromo
	Escribir "Introduce una palabra: "
	Leer palabra
	
	palabraInvertida <- ""
	Para i<-Longitud(palabra) Hasta 0 hacer
		palabraInvertida=palabraInvertida+Subcadena(palabra,i,i)
	FinPara
	escribir palabraInvertida
	Si palabra = palabraInvertida Entonces
		Escribir "La palabra es un palíndromo."
	Sino
		Escribir "La palabra no es un palíndromo."
	FinSi

FinAlgoritmo
