const sarasas = document.querySelector('.searchList');
const filmas = document.querySelector('.filmas');
const result = document.querySelector('.result');
const nav = document.querySelector('.navigacija');

if (localStorage.getItem('skirtukas')==='list') {
    tarpinis(localStorage.getItem('input'), localStorage.getItem('page'))
};
if (localStorage.getItem('skirtukas')=== 'movie') {
    goToFilm(localStorage.getItem('filmId')); 
    tarpinis(localStorage.getItem('input'), localStorage.getItem('page'))
};

function setMessage() {
    result.innerHTML = `<div class="alert alert-warning">Pagal Jūsų užklausą nieko neradome :/</div>`;
}
let page;

function getFilm(e) {
    e.preventDefault();
    page = 1;
    localStorage.setItem('page', page);
    
    const input = e.target.querySelector('input').value;
    
    tarpinis(input,page)
}

function tarpinis(input, page) {
    // e.preventDefault();
//    console.log(page);
   console.log(input);
    nav.innerHTML = '';
    localStorage.setItem('input', input);
    localStorage.setItem('skirtukas', 'list');
   
    fetch(`http://www.omdbapi.com/?apikey=cc5d6118&s=${input}&page=${page}`)
        .then(resp => resp.json())
        .then(resp => {
            
            if (!resp.Search)
                return setMessage();
           
            result.innerHTML = resp.Search.map(value => `
                     <div class="col-3 p-3" onclick="goToFilm('${value.imdbID}')">
                            <img src="${value.Poster}">
                            <h5>${value.Title}</h5>
                    </div>
                `
            ).join('');

            if (resp.totalResults > 10) {
                nav.innerHTML = `
                <li class="page-item disabled"><a class="page-link">Previous</a></li>
                <li class="page-item" onclick="next(event, ${page},'${input}',1)"><a class="page-link" href="#">Next</a></li>
            `
            } 

        });
  
}



function next(e,page, input, a) {
    e.preventDefault();
    
    page = page + a;
    localStorage.setItem('page', page);
    console.log(page);
    fetch(`http://www.omdbapi.com/?apikey=cc5d6118&s=${input}&page=${page}`)
        .then(resp => resp.json())
        .then(resp => {
            
            if (!resp.Search)
                return setMessage();
               
            result.innerHTML = resp.Search.map(value => `
                     <div class="col-3 p-3" onclick="goToFilm('${value.imdbID}')">
                            <img src="${value.Poster}">
                            <h5>${value.Title}</h5>
                    </div>
                `
            ).join('');
           
            if (page === 1){
                nav.innerHTML = `
                <li class="page-item disabled"><a class="page-link">Previous</a></li>
                <li class="page-item" onclick="next(event, ${page},'${input}',1)"><a class="page-link" href="#">Next</a></li>
            `
            } else if (page === Math.ceil(resp.totalResults/10)){
                nav.innerHTML = `
                <li class="page-item"onclick="next(event, ${page},'${input}',-1)"><a class="page-link">Previous</a></li>
                <li class="page-item disabled"><a class="page-link" href="#">Next</a></li>
            ` }
              else  {
                nav.innerHTML = `
                <li class="page-item" onclick="next(event,${page},'${input}',-1)"><a class="page-link">Previous</a></li>
                <li class="page-item" onclick="next(event,${page},'${input}',1)"><a class="page-link" href="#">Next</a></li>
            `
            }

        });

}

function goToFilm(id) {

    
    filmas.style.display = 'block';
    sarasas.style.display = 'none';
    localStorage.setItem('filmId', id);
    localStorage.setItem('skirtukas', 'movie');

    fetch(`http://www.omdbapi.com/?apikey=cc5d6118&i=${id}`)
        .then(resp => resp.json())
        .then(resp => {

            if (!resp)
                return setMessage();
           

            filmas.innerHTML = `
        <div class="row py-3">
            <div class="col-4 d-flex flex-column">
              <button class="btn btn-light mb-3" onclick="goBack(event)"><- Meniu</button>
                <img src="${resp.Poster}">
            </div>
            <div class="col-8">
                <h3>${resp.Title}</h3>
                <p>${resp.Genre}</p>
                <div>
                    <strong>Aprašymas:</strong>
                    <span>${resp.Plot}</span>
                </div>
                <div>
                    <strong>Aktoriai:</strong>
                    <span>${resp.Actors}</span>
                </div>
                <div>
                     <strong>Metai:</strong>
                    <span>${resp.Year}</span>
                </div>
                <div>
                    <strong>Imdb:</strong>
                    <span>${resp.imdbRating}</span>
                </div>
             </div>
        </div>
    `;
        });


}

function goBack(e) {
    e.preventDefault();
   
    localStorage.setItem('skirtukas', 'list');
    filmas.style.display = 'none';
    filmas.innerHTML = '';
    // tarpinis(localStorage.getItem('input')),tarpinis(localStorage.getItem('page'));
    sarasas.style.display = 'block';

}
