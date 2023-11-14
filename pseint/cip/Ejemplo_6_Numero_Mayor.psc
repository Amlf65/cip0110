Algoritmo Ejemplo_6_Numero_Mayor
	//Declaraciones
	var_num1<-0;
	var_num2<-0;
	var_num3<-0;
	//Instrucciones
	Escribir "Introducir tres valores numéricos"
	Leer var_num1, var_num2, var_num3;
	si var_num1> var_num2 y var_num1>var_num3 Entonces
		Escribir "El número mayor es : " var_num1;
	SiNo
		si var_num2>var_num1 y var_num2>var_num3 Entonces
			Escribir "El número mayor es : " var_num2;
		SiNo
			si var_num3>var_num1 y var_num3>var_num2 Entonces
				Escribir "El número mayor es : " var_num3
			FinSi
		FinSi
	FinSi
FinAlgoritmo
