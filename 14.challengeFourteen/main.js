const URL = 'http://hp-api.herokuapp.com/api';
let isLoading = false;

$('#getCharacters').append(
    `<button type="button" class="btn btn-lg btn-danger" id="GryffindorCh">Gryffindor</button>
    <button type="button" class="btn btn-lg btn-warning" id="HufflepuffCh">Hufflepuff</button>
    <button type="button" class="btn btn-lg btn-success" id="SlytherinCh">Slytherin</button>
    <button type="button" class="btn btn-lg btn-primary" id="RavenclawCh">Ravenclaw</button>
    `
)

$("#GryffindorCh").one("click", () => {
    $.get(`${URL}/characters/house/gryffindor`, function (res, state) {
        if (state === "success") {
            for (const {name, species, patronus} of res) {
                $('#showCharacters').append(`
                <div class="card col-sm-3 m-1 characterCard gryffCard">
                    <h3>${name}</h3>
                    <h4>Species: ${species}</h4>
                    <h4>Patronus: ${patronus}</h4>
                </div>
                `)
            }
        }
    })
})

$("#HufflepuffCh").one("click", () => {
    $.get(`${URL}/characters/house/hufflepuff`, function (res, state) {
        if (state === "success") {
            for (const {name, species, patronus} of res) {
                $('#showCharacters').append(`
                <div class="card col-sm-3 m-1 characterCard huffleCard">
                    <h3>${name}</h3>
                    <h4>Species: ${species}</h4>
                    <h4>Patronus: ${patronus}</h4>
                </div>
                `)
            }
        }
    })
})

$("#SlytherinCh").one("click",() => {
    $.get(`${URL}/characters/house/slytherin`, function (res, state) {
        if (state === "success") {
            for (const {name, species, patronus} of res) {
                $('#showCharacters').append(`
                <div class="card col-sm-3 m-1 characterCard slythCard">
                    <h3>${name}</h3>
                    <h4>Species: ${species}</h4>
                    <h4>Patronus: ${patronus}</h4>
                </div>
                `)
            }
        }
    })
})

$("#RavenclawCh").one("click", () => {
    $.get(`${URL}/characters/house/ravenclaw`, function (res, state) {
        if (state === "success") {
            for (const {name, species, patronus} of res) {
                $('#showCharacters').append(`
                <div class="card col-sm-3 m-1 characterCard ravenCard">
                    <h3>${name}</h3>
                    <h4>Species: ${species}</h4>
                    <h4>Patronus: ${patronus}</h4>
                </div>
                `)
            }
        }
    })
})