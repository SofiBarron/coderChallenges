//Back to top Arrow
$('#toTop').append(
    `<div class="arrowStyle">
    <a href="#top" id="bottom"><i class="fas fa-arrow-up fa-2x"></i></a>
    </div>
    `
);

$('#bottom').click(function(e) {
    let target = $('#newInSec');

    if( target.length ) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

//Search Event
const searchInput = document.getElementById('js-searchInput');
const searchButton = document.getElementById('js-searchButton');

function filterProducts (e) {
    e.preventDefault()
    const searchInputValue = searchInput.value;

    const filteredProducts = productList.filter((productList) => {
        const productName = productList.name.toLowerCase();
        return productName.includes (searchInputValue.toLowerCase());
    });

    GridElements(filteredProducts, gridContainer);
}

searchButton.addEventListener("click", filterProducts);