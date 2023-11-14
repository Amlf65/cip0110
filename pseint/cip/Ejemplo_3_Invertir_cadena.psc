Algoritmo Ejemplo_3_Invertir_cadena
	//Declaraciones
	var_cadena<-"";
	var_invertida<-"";
	i<-1;
	Escribir "Introducir cadena a invertir:"
	Leer var_cadena;
	para i=Longitud(var_cadena) Hasta 1
		var_invertida=var_invertida + Subcadena(var_cadena,i,i)
	FinPara
	Escribir "la cadena invertida es: " var_invertida
FinAlgoritmo
