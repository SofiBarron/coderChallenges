//Add Item to Cart 
let itemCounter = 0;

$('.addToCart').click(function() {
    //Update item counter
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
    })