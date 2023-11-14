Algoritmo Ejemplo_11_Factorial
	//Declarativa
	var_fact<-0;
	indice<-0;
	var_acumula<-1
	//Intrucciones
	Escribir "Introducir número a calcular factorial";
	leer var_fact;
	para indice=1 Hasta var_fact
		var_acumula=var_acumula*indice;
	FinPara
	Escribir " el factorial de " var_fact " es " var_acumula; 
	
FinAlgoritmo
