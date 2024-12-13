const meniu = document.querySelector('.main');
const receptas = document.querySelector('.receptas');
const result = document.querySelector('.result');

createAlphabetLinks();

function formatIngredients(value) {
    let html = '<ul>';

    for (let i = 1; i <= 20; i++) {
        if (value['strIngredient' + i]) {
            html += `<li  class="fst-italic text-decoration-underline" onclick="search(event, 'https://www.themealdb.com/api/json/v1/1/filter.php?i=${value['strIngredient' + i]}')">${value['strIngredient' + i]} ${value['strMeasure' + i]}</li>`;
        }
    }
    html += '</ul>';
    return html;
}

function getMeal(e) {
    e.preventDefault();

    const input = e.target.querySelector('input');
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            if (!resp.meals)
                return;

            result.innerHTML = resp.meals.map(value => `
                 <div class="col-3 p-3" onclick="goToReceipt(event,${value.idMeal})">
                        <img src="${value.strMealThumb}">
                        <h5>${value.strMeal}</h5>
                </div>
            `
            ).join('');
        });
}

function goToReceipt(e, id) {

    e.preventDefault();
    receptas.style.display = 'block';
    meniu.style.display = 'none';

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(resp => resp.json())
        .then(resp => {
            if (!resp.meals)
                return;
            console.log(resp);

            receptas.innerHTML = resp.meals.map(value => `
            <div class="row py-3">
            <div class="col-4">
              <button class="btn btn-light mb-3" onclick="goBack(event)"><- Meniu</button>
                <img src="${value.strMealThumb}">
              </div>
            <div class="col-8">
                <h3>${value.strMeal}</h3>
                <p>${value.strInstructions}</p>
                <div>
                    <strong>Kategorija:</strong>
                    <span class="fst-italic text-decoration-underline" onclick="search(event, 'https://www.themealdb.com/api/json/v1/1/filter.php?c=${value.strCategory}')">${value.strCategory}</span>
                </div>
                <div>
                    <strong>Šalis:</strong>
                    <span class="fst-italic text-decoration-underline" onclick="search(event, 'https://www.themealdb.com/api/json/v1/1/filter.php?a=${value.strArea}')"
                    >${value.strArea}</span>
                </div>
                <div>
                    <h4>Ingridientai</h4>
                    ${formatIngredients(value)}
                </div>
                <div>
                    <strong>Youtube: </strong>
                    <a href="${value.strYoutube}">${value.strYoutube}</a>
                </div>
        </div>
        </div>
    `);
        });


}

function goBack(e) {
    e.preventDefault();
    receptas.style.display = 'none';
    receptas.innerHTML = '';
    meniu.style.display = 'block';

}

function search(e, page) {
    e.preventDefault();
    receptas.style.display = 'none';
    receptas.innerHTML = '';
    result.innerHTML = '';
    meniu.style.display = 'block';

    const input = e.target.querySelector('input');

    fetch(page)
        .then(resp => resp.json())
        .then(resp => {
            if (!resp.meals)
                return;

            result.innerHTML = resp.meals.map(value => `
                 <div class="col-3 p-3" onclick="goToReceipt(event,${value.idMeal})">
                        <img src="${value.strMealThumb}">
                        <h5>${value.strMeal}</h5>
                </div>
            `
            ).join('');
        });


}

function randomReceipt(e, page) {

    e.preventDefault();
    receptas.style.display = 'block';
    meniu.style.display = 'none';

    fetch(page)
        .then(resp => resp.json())
        .then(resp => {
            if (!resp.meals)
                return;
            console.log(resp);

            receptas.innerHTML = resp.meals.map(value => `
            <div class="row py-3">
            <div class="col-4">
                <button class="btn btn-light mb-3" onclick="goBack(event)"><- Meniu</button>
                <img src="${value.strMealThumb}">
            </div>
            <div class="col-8">
                <h3>${value.strMeal}</h3>
                <p>${value.strInstructions}</p>
                <div>
                    <strong>Kategorija:</strong>
                    <span class="fst-italic text-decoration-underline" onclick="search(event, 'https://www.themealdb.com/api/json/v1/1/filter.php?c=${value.strCategory}')">${value.strCategory}</span>
                </div>
                <div>
                    <strong>Šalis:</strong>
                    <span class="fst-italic text-decoration-underline" onclick="search(event, 'https://www.themealdb.com/api/json/v1/1/filter.php?a=${value.strArea}')"
                    >${value.strArea}</span>
                </div>
                <div>
                    <h4>Ingridientai</h4>
                    ${formatIngredients(value)}
                </div>
                <div>
                    <strong>Youtube: </strong>
                    <a href="${value.strYoutube}">${value.strYoutube}</a>
                </div>
        </div>
    `);
        });


}

function createAlphabetLinks() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const linksContainer = document.getElementById('alphabet-links');

    let abc = '';
    for (let i = 0; i < alphabet.length; i++) {
        abc += `<li class="d-flex align-items-center" onclick="search(event, 'https://www.themealdb.com/api/json/v1/1/search.php?f=${alphabet[i]}')">${alphabet[i]}</li>`;
        
        }
    document.querySelector('.abecele').innerHTML = abc;

}
       
       




