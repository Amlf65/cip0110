// Escribe un programa que calcule el área u el perímetro rectángulo,
// datos los dos catetos
Algoritmo Ejercicio007
	Definir catetoA,catetoB,hipotenusa,area Como Real
	catetoA <- 0
	catetoB <- 0
	hipotenusa <- 0
	area <- 0
	Escribir 'Dime el valor e los dos catetos '
	Leer catetoA,catetoB
	area <- (catetoA+catetoB)/2
	hipotenusa <- rc(catetoA*2+catetoB+2)
	Escribir 'El área del triángulo es: ',area
	Escribir 'EL perímetro es: ',catetoA+catetoB+hipotenusa
FinAlgoritmo
