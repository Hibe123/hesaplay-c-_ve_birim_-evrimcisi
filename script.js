function press(key) {
    const display = document.getElementById('display');
    if (key === 'AC') {
        display.value = '';
    } else if (key === '*') {
        display.value += '*';
    } else {
        display.value += key;
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function convertLength() {
    let input = document.getElementById('length-input').value;
    let from = document.getElementById('length-from').value;
    let to = document.getElementById('length-to').value;
    let result = convertUnits(input, from, to, 'length');
    document.getElementById('length-result').innerText = result + ' ' + to;
}

function convertWeight() {
    let input = document.getElementById('weight-input').value;
    let from = document.getElementById('weight-from').value;
    let to = document.getElementById('weight-to').value;
    let result = convertUnits(input, from, to, 'weight');
    document.getElementById('weight-result').innerText = result + ' ' + to;
}

function convertVolume() {
    let input = document.getElementById('volume-input').value;
    let from = document.getElementById('volume-from').value;
    let to = document.getElementById('volume-to').value;
    let result = convertUnits(input, from, to, 'volume');
    document.getElementById('volume-result').innerText = result + ' ' + to;
}

function convertUnits(value, from, to, type) {
    if (from === to) {
        return value;
    }
    const lengthFactors = {
        'cm': { 'm': 0.01, 'km': 0.00001, 'in': 0.393701, 'ft': 0.0328084, 'yd': 0.0109361, 'mi': 0.0000062137 },
        'm': { 'cm': 100, 'km': 0.001, 'in': 39.3701, 'ft': 3.28084, 'yd': 1.09361, 'mi': 0.000621371 },
        'km': { 'cm': 100000, 'm': 1000, 'in': 39370.1, 'ft': 3280.84, 'yd': 1093.61, 'mi': 0.621371 },
        'in': { 'cm': 2.54, 'm': 0.0254, 'km': 0.0000254, 'ft': 0.0833333, 'yd': 0.0277778, 'mi': 0.0000157828 },
        'ft': { 'cm': 30.48, 'm': 0.3048, 'km': 0.0003048, 'in': 12, 'yd': 0.333333, 'mi': 0.000189394 },
        'yd': { 'cm': 91.44, 'm': 0.9144, 'km': 0.0009144, 'in': 36, 'ft': 3, 'mi': 0.000568182 },
        'mi': { 'cm': 160934, 'm': 1609.34, 'km': 1.60934, 'in': 63360, 'ft': 5280, 'yd': 1760 }
    };
    const weightFactors = {
        'g': { 'kg': 0.001, 'lb': 0.00220462, 'oz': 0.035274 },
        'kg': { 'g': 1000, 'lb': 2.20462, 'oz': 35.274 },
        'lb': { 'g': 453.592, 'kg': 0.453592, 'oz': 16 },
        'oz': { 'g': 28.3495, 'kg': 0.0283495, 'lb': 0.0625 }
    };
    const volumeFactors = {
        'ml': { 'l': 0.001, 'cl': 0.1 },
        'l': { 'ml': 1000, 'cl': 100 },
        'cl': { 'ml': 10, 'l': 0.01 }
    };

    const factors = type === 'length' ? lengthFactors : type === 'weight' ? weightFactors : volumeFactors;
    return value * (factors[from][to] || 1 / factors[to][from]);
}
