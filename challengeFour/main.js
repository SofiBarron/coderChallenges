let result;

const itemValue = parseFloat (prompt('Ingrese el valor del producto'));
const discountAvailable = parseFloat (prompt('Ingrese el descuento disponible'));

function discounts (itemValue, discountAvailable) {
    switch (discountAvailable) {
        case 50:
            result = itemValue - (itemValue * discountAvailable / 100);
            return 'Product price will be ' + result;
        case 25:
            result = itemValue - (itemValue * discountAvailable / 100);
            return 'Product price will be ' + result;
        case 15:
            result = itemValue - (itemValue * discountAvailable / 100);
            return 'Product price will be ' + result;
        default:
            return 'No discounts available'
    }
}

discounts (itemValue, discountAvailable);
function showResult(message) {
    console.log (message);
}

showResult('El valor del producto con el descuento será de: ' + result);