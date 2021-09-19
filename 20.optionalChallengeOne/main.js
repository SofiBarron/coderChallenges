const productOne = parseFloat (prompt('Ingrese el valor del primer producto'));
const productTwo = parseFloat (prompt('Ingrese el valor del segundo producto'));
const discount = 0.10;

function toPay(productOne, productTwo, discount) {
    result = 0;
    productSum = productOne+productTwo;

    if(productSum > 0 && productSum < 5000) {
        result = productSum;
    } else {
        result = productSum - (productSum*discount);
    }

    return result;
}

function showResult() {
    let total = 0;
    total = toPay(productOne, productTwo, discount);

    alert("El valor a pagar es de " + total)
}

showResult ()