Algoritmo Ejemplo_5_dia_de_la_semana
	//Declarativas
	var_num<-0;
	Escribir "Introducir n�mero del d�a de la semana";
	leer var_num;
	si var_num>0 y var_num<8 Entonces
		Segun var_num
			caso 1:
				Escribir "Lunes"
			caso 2:
				Escribir "Martes"
			caso 3:
				Escribir "MI�rcoles"
			caso 4:
				Escribir "Jueves"
			caso 5:
				Escribir "Viernes"
			caso 6:
				Escribir "S�bado"
			caso 7:
				Escribir "Domingo"
		FinSegun
	SiNo
		Escribir "Error, el n�mero debe estar entre 1 y 7";
	FinSi
FinAlgoritmo
