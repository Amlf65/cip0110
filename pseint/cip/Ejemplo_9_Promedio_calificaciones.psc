Algoritmo Ejemplo_9_Promedio_calificaciones
	//Declaraciones
	var_nota<-0;
	var_contador<-0;
	var_suma<-0
	//Instrucciones
	Escribir "Introducir nota"
	leer var_nota;
	Mientras var_nota>=0
		var_contador=var_contador+1;
		var_suma=var_suma+var_nota
		Escribir "Introducir nota"
		leer var_nota;
	FinMientras
	si var_contador>0 Entonces
		Escribir "Se han introducido " var_contador " notas y el promedio es " var_suma/var_contador;
	SiNo
		Escribir "No se ha introducido ninguna nota";
	FinSi
	
	
FinAlgoritmo
