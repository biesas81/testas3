import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [zinios, setZinios] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(1)

  const link = 'https://newsapi.org/v2/everything?q=keyword&apiKey=6096b50a2f6944238ce106303c5860f4';
  //  'https://www.themealdb.com/api/json/v1/1/search.php?s=' + e.target.querySelector('input[type="text"]').value;

  
  useEffect(() => {
    fetch(link)
      .then(atsakymas => atsakymas.json())
      .then(atsakymas => {
        if (!atsakymas.articles)
          return;
        console.log(atsakymas);
        setZinios(atsakymas.articles)
      })
  }, [page])


  return (
    <>
      <div className="container">
        <h3>Naujienos</h3>
        <form onsubmit={() => setLink()}>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Įveskite frazę" />
            <button className="btn btn-primary">Ieškoti</button>
          </div>
        </form>
        <div className="d-flex flex-wrap">
          {zinios.map((reiksme, index) =>
            <div key={index} className="col-4 p-2">
              <div>
                <img src={reiksme.urlToImage} alt="photo" />
              </div>
              <div className="d-flex justify-content-between">
                <span>{reiksme.source.name}</span>
                <span>{reiksme.publishedAt}</span>
               
              </div>
              <h6>{reiksme.title}</h6>
              <p>{reiksme.description}</p>
              <div className="d-flex flex-row-reverse">
              <button type="button" class="btn btn-secondary" style={{fontSize: 9}}>Skaityti plačiau</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <button onClick={() => setPage(2)}>Sekantis puslapis</button>


    </>
  )
}

export default App
