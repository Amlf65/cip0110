// Dise�a un programa que calcule el precio final de un articulo , conociendo
//e� precio inicial y el porcentaje de descuento
Algoritmo Ejercicio005
	//precioInicial: precio del articulo antes del descuento
	//desciento: pprcentaje de descuento
	//precioFinal: precion del att�culo tras aplicar el descuento
	Definir precioInicial, descuento, precioFinal Como Real;
	precioInicial=0;
	descuento=0;
	Escribir "Indique el valor del producto ";
	Leer precioInicial
	Escribir "Indique el porcentaje de descuento ";
	Leer descuento;
	precioFinal=precioInicial*(1-descuento/100);
	Escribir "El precio final del art�culo es: ", precioFinal ," ?"
FinAlgoritmo
