Algoritmo Dias_a_semanas
	Escribir "Introduce el número de días: "
	Leer dias
	
	semanas = trunc(dias / 7)
	diasRestantes = dias MOD 7
	
	Escribir semanas, " semana(s) y ", diasRestantes, " día(s)"

FinAlgoritmo
