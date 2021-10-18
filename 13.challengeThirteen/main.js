//Personal Info Form
$('#contactDataForm').append(
    `<div class="form-row">
        <div class="form-group col-md-6">
            <label for="inputName4">Name</label>
            <input type="text" class="form-control" id="inputName4" placeholder="Peter">
        </div>
        <div class="form-group col-md-6">
            <label for="inputSurname4">Surname</label>
            <input type="text" class="form-control" id="inputSurname4" placeholder="Parker">
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="parker@dailybugle.com">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                else.</small>
        </div>
    </div>

    <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Libertador 1952">
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" placeholder="Buenos Aires">
        </div>
        <div class="form-group col-md-2">
            <label for="inputZip">Zip Code</label>
            <input type="text" class="form-control" id="inputZip" placeholder="1221">
        </div>
    </div>
    <button type="submit" class="btn btn-primary mb-2" id="js-continueButton">Continue</button>
    `
);


//Payment Methods Form
$('#paymentMethodsForm').append(
    `<form style="display: none">
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
            </form>`
);

//Personal Info - Animation
$('#contactDataForm').fadeIn();

//Continue Button - Animation
$('#contactDataForm').submit(function (e) {
        e.preventDefault();
    $('#paymentMethodsForm').show();
    $('#contactDataForm').hide();
})