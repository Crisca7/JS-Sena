// Definir la matriz bidimensional 3x4
var matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

// Función para sumar los elementos de una fila y mostrar el resultado
function sumarFila(fila) {
    var sumaFila = 0;
    for (var i = 0; i < matriz[fila].length; i++) {
        sumaFila += matriz[fila][i];
    }
    console.log("Suma de los elementos en la fila " + (fila + 1) + ": " + sumaFila);
}

// Función para sumar los elementos de una columna y mostrar el resultado
function sumarColumna(columna) {
    var sumaColumna = 0;
    for (var i = 0; i < matriz.length; i++) {
        sumaColumna += matriz[i][columna];
    }
    console.log("Suma de los elementos en la columna " + (columna + 1) + ": " + sumaColumna);
}

// Calcular y mostrar la suma de elementos por filas
for (var fila = 0; fila < matriz.length; fila++) {
    sumarFila(fila);
}

// Calcular y mostrar la suma de elementos por columnas
for (var columna = 0; columna < matriz[0].length; columna++) {
    sumarColumna(columna);
}
