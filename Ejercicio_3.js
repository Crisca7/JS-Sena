// Inicializar variables
var suma = 0;
var traza = "Trama de las primeras 5 iteraciones:\n";

// Ciclo para encontrar múltiplos de 3 hasta 100
for (var i = 3; i <= 99; i += 3) {
  // Imprimir el número múltiplo de 3
  console.log("Número múltiplo de 3: " + i);

  // Sumar el número a la suma total
  suma += i;

  // Agregar a la traza
  traza += "Iteración " + (i / 3) + ": Suma parcial = " + suma + "\n";

  // Salir del bucle después de las primeras 5 iteraciones
  if ((i / 3) === 5) {
    break;
  }
}

// Imprimir resultado final
console.log("Suma total de los primeros múltiplos de 3: " + suma);
console.log(traza);