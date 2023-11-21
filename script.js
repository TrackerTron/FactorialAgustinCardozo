// Función para calcular el factorial de un número
function calcularFactorial(numero) {
    // Inicializamos el resultado a 1, ya que el factorial de 0 es 1
    var resultado = 1;
  
    // Utilizamos un bucle for para multiplicar los números desde 1 hasta el número dado
    for (var i = 1; i <= numero; i++) {
      resultado *= i;
    }
  
    // Devolvemos el resultado del factorial
    return resultado;
  }
  
  // Variable que contiene el número para el cual queremos calcular el factorial
  var numeroParaFactorial = 10; // Puedes cambiar este valor por el número que desees
  
  // Llamamos a la función y mostramos el resultado por consola
  console.log("El factorial de " + numeroParaFactorial + " es: " + calcularFactorial(numeroParaFactorial));
  