// 1. Seleccionamos los elementos de la pantalla mediantes sus id
const inputNombre = document.getElementById("nombreInput");
const botonSaludar = document.getElementById("saludarBtn");
const textoMensaje = document.getElementById("mensajeSaludo");
// 2. Escuchamos el evento click del boton
botonSaludar.addEventListener("click", function() {
    // Guardamos lo que escribio el usuario en la caja de texto
    const nombre = inputNombre.value;

    // verificamos si escribio algo
    if (nombre.trim() !== "") {
        textoMensaje.textContent = `¡Hola, ${nombre}! Bienvenido a la app.`; }
        else {
        textoMensaje.textContent = "Por favor, ingresa tu nombre.";
    }
});
