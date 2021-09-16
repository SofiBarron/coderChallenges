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
    productOne = parseFloat (prompt('Ingrese el valor del primer producto'));
    productTwo = parseFloat (prompt('Ingrese el valor del segundo producto'));
    discount = 0.10;

    total = toPay(productOne, productTwo, discount);

    alert("El valor a pagar es de " + total)
}
