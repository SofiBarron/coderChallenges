//Form Template
const htmlFormTemplate = () => {
    return `<form>
            <fieldset class="form-group">
            <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Methods Available:</legend>
            <div class="col-sm-10">
            <div class="form-check">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadiosMethod1" value="option1" checked>
            <label class="form-check-label" for="gridRadios1">
            PayPal
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadiosMethod2" value="option2">
            <label class="form-check-label" for="gridRadios2">
            Credit Card
            </label>
            </div>
            </div>
            </div>
            </fieldset>
            </form>`;
}

function showPurchaseMethods () {
    const purchaseMethodsForm = document.getElementById('js-containerPaymentMethods');
    purchaseMethodsForm.innerHTML = htmlFormTemplate;
}

const continueButton = document.getElementById('js-continueButton');
continueButton.addEventListener('click', showPurchaseMethods);