Algoritmo Ejercicio06
	//Declaraciones
	var_importe<-0;
	var_porcen<-0;
	var_masmenos<-"";
	var_resultado<-0;
	//Instrucciones
	Escribir "Introducir importe";
	Leer var_importe;
	Escribir "Introducir Porcentaje";
	leer var_porcen;
	Escribir "Introducir M�s (+) o Menos (-)"
	leer var_masmenos
	var_resultado=var_importe*var_porcen/100
	SI Minusculas(var_masmenos)="mas" o Minusculas(var_masmenos)="m�s" o var_masmenos="+" Entonces
		Escribir "El total es : " var_importe + var_resultado;
	SiNo
		si Minusculas(var_masmenos)="menos" o var_masmenos="-" Entonces
			Escribir "El total es : " var_importe - var_resultado;
		SiNo
			Escribir  "Acl�rate!!!!"
		FinSi
	FinSi
FinAlgoritmo
