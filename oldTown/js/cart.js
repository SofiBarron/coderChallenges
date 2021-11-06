//Item Counter
let itemCounter = 0;

//Update number shown on counter
function updateCounterWhenAdding () {
    itemCounter += +1;
    $("#cartCounter").animate({
        opacity: 1},
        300, function() {
            $(this).text(itemCounter);
        })
        
        //Show notification toaster
        toastr.success('Find your picks in the cart','Done!',{
            "timeOut": 0,
            "extendedTimeOut": 0,
            "progressBar": true,
            "preventDuplicates": true,
        });
} 

//Button Interaction
$('.addToCart').click(updateCounterWhenAdding);

//Modal Details
let modalData = document.getElementById('modalContainer');

//Modal Body Template Empty State
const modalItemListEmptyTemplate = `<div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <p class="cartEmptyMessage">The cart is empty!</p>
                    </div>
                </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>`;

//Modal Body Template For Items
const modalItemListTemplate = (product) => {
    return `<div class="modal-body">
            <div class="container-fluid">
                <div class="row justify-content-around">
                    <h4 class="col-md-4">Title</h4>
                    <h4 class="col-md-4">Author</h4>
                    <h4 class="col-md-3">Price</h4>
                    <h4 class="col-md-1 ml-auto"></h4>
                </div>
                <div class="row justify-content-around">
                    <p class="col-md-4">${product.name}</p>
                    <p class="col-md-4">${product.author}</p>
                    <p class="col-md-3">${product.price}</p>
                    <div class="col-md-1 ml-auto">
                        <a href="#"><i class="far fa-times-circle fa-1x"></i></a>
                    </div>
                </div>
                <div class="row align-items-end">
                    <h4 class="col-md-3 ml-auto">Total:</h4>
                    <h3>$0</h3>
                </div>
            </div>
        </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>`
}

modalContainer.innerHTML = modalItemListEmptyTemplate;

//Modal view function
//let cartModalView = (modalContainer) => {
//    modalContainer.innerHTML = '';
//
//    if (cartStorage = []) {
//        modalContainer.innerHTML = modalItemListEmptyTemplate;
//    } 
//    else {
//        modalContainer.innerHTML = modalItemListTemplate;
//    } 
//}
