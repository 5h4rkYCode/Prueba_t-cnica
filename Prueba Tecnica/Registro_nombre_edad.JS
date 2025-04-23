// //Crea un pequeño programa que permita registrar el nombre y la edad de 3 personas, 
// al final imprima cuál es la persona con mayor edad. Puedes usar listas o diccionarios.
// Persona con mayor edad: Juan (32 años)

function Persona_mayor() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let nombre2 = document.getElementById("nombre2").value;
    let edad2 = document.getElementById("edad2").value;
    let nombre3 = document.getElementById("nombre3").value;
    let edad3 = document.getElementById("edad3").value;


    if (!nombre || !edad || !nombre2 || !edad2 || !nombre3 || !edad3) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let personas = [
        { nombre: nombre, edad: parseInt(edad) },
        { nombre: nombre2, edad: parseInt(edad2) },
        { nombre: nombre3, edad: parseInt(edad3) }
    ];

    let mayor = personas[0];

    for (let i = 1; i < personas.length; i++) {
        if (personas[i].edad > mayor.edad) {
            mayor = personas[i];
        }
    }
    
    let resultado = `
    <p>La persona con mayor edad es: <strong>${mayor.nombre} (${mayor.edad} años)</strong></p>
    `;


    if (mayor.edad >= 70) {
        resultado += `<p> La persona <strong>${mayor.nombre}</strong> es mayor 70 años, ya es de la 3 edad</p> `
    }else if (mayor.edad > 40 && mayor.edad < 60) {
        resultado += `<p> La persona <strong>${mayor.nombre}</strong> es menor de 40 años, no es de la 3 edad</p>`
    }else{
        resultado += `<p> La persona <strong>${mayor.nombre}</strong> es menor de 40 años, le falta mucho para ser de la 3 edad</p>`
    }

    // Mostrar el resultado en el elemento HTML
    document.getElementById("pegi").innerHTML = resultado;
}

document.getElementById("boton").addEventListener("click", Persona_mayor);