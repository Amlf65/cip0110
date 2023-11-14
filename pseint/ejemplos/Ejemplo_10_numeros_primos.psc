Algoritmo Ejemplo_10_numeros_primos
	//Declarativas
	var_primo<-0;
	indice<-0
	var_flag<-0
	//Instrucciuones
	escribir "Introducir número a comprobar si es primo";
	Leer var_primo;
	Para indice=2 Hasta var_primo-1
		si var_primo MOD indice = 0 Entonces
			var_flag=1;
		FinSi
	FinPara
	si var_flag=0 Entonces
		Escribir "El número " var_primo " es primo";
	SiNo
		Escribir "El número " var_primo " no es primo"
	FinSi
FinAlgoritmo
