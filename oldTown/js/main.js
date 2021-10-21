//New In
$('#newIn').append(`
    <h2 class="sectionName" id="newInSec">New In!</h2>
    <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="images/beastBoyRavenCar.jpg" alt="Beast Boy and Raven">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Beast Boy Loves Raven</h5>
                    <p>Kami Garcia and Gabriel Piccolo are back with a new Teen Titan novel.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="images/hailMaryCar.png" alt="Project Hail Mary">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Project Hail Mary</h5>
                    <p>Andy Weir returns with a new sci-fi already on its way to adaptation.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="images/sandman.jpg" alt="The Sandman">
                <div class="carousel-caption d-none d-md-block">
                    <h5>The Sandman</h5>
                    <p>Back in stock! Get ready for the Netflix show with the first volume of this incredible graphic novel.</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `);

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