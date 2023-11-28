// Inicializar la variable de suma
var suma = 0;

// Ciclo para sumar los números pares entre 50 y 200
for (var i = 50; i <= 200; i++) {
  // Verificar si el número es par
  if (i % 2 === 0) {
    // Sumar el número par a la variable de suma
    suma += i;
  }
}

// Imprimir el resultado
console.log("La suma de los números pares entre 50 y 200 es: " + suma);
