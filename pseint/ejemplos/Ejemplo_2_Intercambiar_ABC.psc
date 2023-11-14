Algoritmo Ejemplo_2_Intercambiar_ABC
	//Declaraciones
	var_A<-0;
	var_B<-0;
	var_C<-0;
	var_Aux<-0;
	//Instrucciones
	Escribir "Introducir tres valores";
	leer var_A, var_B, var_C;
	Escribir "Antes:  A-> " var_A ", B-> " var_B ", C-> " var_C;
	var_Aux=var_A;
	var_A=var_C;
	var_C=var_B;
	var_B=var_Aux;
	Escribir "Después: A-> " var_A ", B-> " var_B ", C-> " var_C;
FinAlgoritmo
