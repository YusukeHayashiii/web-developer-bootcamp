const display = document.querySelector('#display');
console.log(display)

function appendToDisplay(value) {
    display.value += value;
    console.log(display.value)
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}