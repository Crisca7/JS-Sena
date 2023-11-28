// Inicializar variables
var potencia = 1;
var traza = "Trama de las primeras 5 iteraciones:\n";

// Ciclo para calcular potencias de 2 hasta que sean menores o iguales a 100
for (var i = 1; potencia <= 100; i++) {
  // Imprimir la potencia de 2
  console.log("Potencia de 2: 2^" + (i - 1) + " = " + potencia);

  // Agregar a la traza
  traza += "Iteración " + i + ": 2^" + (i - 1) + " = " + potencia + "\n";

  // Calcular la siguiente potencia de 2
  potencia *= 2;
}

// Imprimir traza
console.log(traza);
