Algoritmo Dias_a_semanas
	Escribir "Introduce el n�mero de d�as: "
	Leer dias
	
	semanas = trunc(dias / 7)
	diasRestantes = dias MOD 7
	
	Escribir semanas, " semana(s) y ", diasRestantes, " d�a(s)"

FinAlgoritmo
