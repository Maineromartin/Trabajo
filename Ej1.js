/* Ejercicio 1:
Estructuras condicionales, operadores, funciones

Escribí un programa que dado un año como entrada diga si es bisiesto o no.

Tener en cuenta que un año es bisiesto si:

- Divisible por 4.
- No divisible por 100.
- Divisible por 400. (2000 y 2400 son bisiestos pues aún siendo divisibles por 100 lo son también por 400.
- Pero los años 1900, 2100, 2200 y 2300 no lo son porque solo son divisibles por 100).
*/

// Función que verifica si es bisiesto (Lógica)
function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

// Función principal que interactúa con la interfaz web
function calcularBisiesto() {
    // 1. Capturamos el valor que el usuario escribió en el <input>
    let inputElemento = document.getElementById("anioInput");
    let anio = parseInt(inputElemento.value);

    // 2. Obtenemos la referencia al párrafo <p> donde se mostrará el resultado
    let resultadoElemento = document.getElementById("resultado");

    // 3. Validamos la entrada
    if (isNaN(anio)) {
        resultadoElemento.textContent = "Por favor, ingresa un número válido.";
        resultadoElemento.style.color = "red";
        return;
    }

    // 4. Ejecutamos la lógica y escribimos el resultado directamente en el HTML
    if (esBisiesto(anio)) {
        resultadoElemento.textContent = `${anio} es un año bisiesto.`;
        resultadoElemento.style.color = "green";
    } else {
        resultadoElemento.textContent = `${anio} no es un año bisiesto.`;
        resultadoElemento.style.color = "black";
    }
}