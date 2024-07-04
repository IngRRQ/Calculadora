// Función para añadir caracteres al display
function appendToDisplay(character) {
    document.getElementById('display').value += character;
}

// Función para limpiar el display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Función para borrar el último carácter del display
function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Función para calcular el resultado
function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
