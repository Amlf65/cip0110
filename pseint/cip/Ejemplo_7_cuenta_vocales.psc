Algoritmo Ejemplo_7_cuenta_vocales
	//Declarativas
	var_cadena<-""
	const_vocales<-"aeiouAEIOUáéíóúÁÉÍÓÚüÜ"
	contador<-0
	//Instrucciones
	Escribir "Introducir cadena:";
	Leer var_cadena;
	para i=1 Hasta Longitud(var_cadena)
		para j=1 Hasta Longitud(const_vocales)
			si Subcadena(var_cadena,i,i)=Subcadena(const_vocales,j,j)
				contador=contador+1;
			FinSi
		FinPara
	FinPara
	Escribir "El número de vocales es :" contador;
FinAlgoritmo
