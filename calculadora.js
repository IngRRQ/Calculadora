// Se añaden los caracteres al display
const appendToDisplay = (character) => {
    document.getElementById('display').value += character;
}

// Se limpia el display
const clearDisplay = () => {
    document.getElementById('display').value = 0;
}

// Se borra el último carácter del display
const deleteLast = () => {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Se calcula el resultado
const calculateResult = () => {
    let display = document.getElementById('display');
    try {
        let result = display.value = eval(display.value);
        display.value = parseFloat(result.toFixed(2));
        
    } catch (e) {
        display.value = 'Error';
    }
}
