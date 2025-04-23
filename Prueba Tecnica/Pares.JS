// //Escribe una función que reciba una lista de números y retorne solo los números pares.
// Ejemplo de entrada: [1, 2, 3, 4, 5, 6]
// Salida esperada: [2, 4, 6]

function pares() {
    let numeros = [1, 2, 3, 4, 5, 6]; // Lista de números de ejemplo
    let pares = []; // Lista para almacenar los números pares
    
    for (let i = 0; i < numeros.length; i++) {  // Itera sobre cada número en la lista
        if (numeros[i] % 2 === 0) { // Verifica si el número es par
            pares.push(numeros[i]);  // Si es par, lo agrega a la lista de pares
        }
    }
    return pares; // Retorna la lista de números pares
}

console.log(pares());  // Llama a la función y muestra el resultado en la terminal 
