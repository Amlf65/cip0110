Algoritmo Ejemplo_8_formato_fecha
	//Declarativas
	var_fecha<-"";
	//Instrucciones
	Escribir "Introducir fecha en formato DD/MM/YYYY";
	leer var_fecha;
	segun Subcadena(var_fecha,4,5)
		caso "01":
			Escribir "Es " + Subcadena(var_fecha,1,2) " de enero del año " + Subcadena(var_fecha,7,10)
		caso "02":
			Escribir "Es " + Subcadena(var_fecha,1,2) " de febrero del año " + Subcadena(var_fecha,7,10)
		caso "03":
			Escribir "Es " + Subcadena(var_fecha,1,2) " de marzo del año " + Subcadena(var_fecha,7,10)
		caso "04":
			Escribir "Es " + Subcadena(var_fecha,1,2) " de abril del año " + Subcadena(var_fecha,7,10)
		caso "05":
			Escribir "Es " + Subcadena(var_fecha,1,2) " de mayo del año " + Subcadena(var_fecha,7,10)
		caso "06":
			Escribir "Es " + Subcadena(var_fecha,1,2) " de junio del año " + Subcadena(var_fecha,7,10)
		caso "07":
			Escribir "Es " + Subcadena(var_fecha,1,2) " de julio del año " + Subcadena(var_fecha,7,10)
		caso "08":
			Escribir "Es " + Subcadena(var_fecha,1,2) " de agosto del año " + Subcadena(var_fecha,7,10)
		caso "09":
			Escribir "Es " + Subcadena(var_fecha,1,2) " de septiembre del año " + Subcadena(var_fecha,7,10)
		caso "10":
			Escribir "Es " + Subcadena(var_fecha,1,2) " de octubre del año " + Subcadena(var_fecha,7,10)
		caso "11":
			Escribir "Es " + Subcadena(var_fecha,1,2) " de novienmbre del año " + Subcadena(var_fecha,7,10)
		caso "12":
			Escribir "Es " + Subcadena(var_fecha,1,2) " de diciembre del año " + Subcadena(var_fecha,7,10)
	FinSegun
FinAlgoritmo
