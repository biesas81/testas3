import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [zinios, setZinios] = useState([]);
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(5); // Bendras puslapių skaičius
  const [query, setQuery] = useState("");
  const [link, setLink] = useState(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=6096b50a2f6944238ce106303c5860f4"
  );

  useEffect(() => {
    fetch(link)
      .then(atsakymas => atsakymas.json())
      .then(atsakymas => {
        if (!atsakymas.articles)
          return;
        console.log(atsakymas);
        setZinios(atsakymas.articles)
        setTotalPages(Math.ceil(atsakymas.totalResults / 100)); // Apskaičiuojame bendrą puslapių skaičių
      })
  }, [link])

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    setLink(
      `https://newsapi.org/v2/everything?q=${query}&page=1&apiKey=6096b50a2f6944238ce106303c5860f4`
    );
  };

  const changePage = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
    setLink(
      `https://newsapi.org/v2/everything?q=${query}&page=${newPage}&apiKey=6096b50a2f6944238ce106303c5860f4`
    );
  };

  const getVisiblePages = () => {
    const visiblePages = [];
    const startPage = Math.max(1, page - 1);
    const endPage = Math.min(totalPages, page + 1);
    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }
    return visiblePages;
  };

  return (
    <>
      <div className="container">
        <h3>Naujienos</h3>
        <form onSubmit={handleSearch}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Įveskite frazę"
              value={query}
              onChange={(e) => setQuery(e.target.value)} // Sekame įvestį
            />
            <button className="btn btn-primary" type="submit">Ieškoti</button>
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
                <span>{new Date(reiksme.publishedAt).toLocaleDateString()}</span>

              </div>
              <h6>{reiksme.title}</h6>
              <p>{reiksme.description}</p>
              <div className="d-flex flex-row-reverse">
                <button
                  type="button"
                  className="btn btn-secondary"
                  style={{ fontSize: 9 }}
                  onClick={() => window.open(reiksme.url, "_blank")}
                >
                  Skaityti plačiau</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
            <a
              className="page-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                changePage(page - 1);
              }}
            >
              Ankstesnis
            </a>
          </li>
          {getVisiblePages().map((p) => (
            <li
              key={p}
              className={`page-item ${page === p ? "active" : ""}`}
            >
              <a
                className="page-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  changePage(p);
                }}
              >
                {p}
              </a>
            </li>
          ))}
          <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
            <a
              className="page-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                changePage(page + 1);
              }}
            >
              Sekantis
            </a>
          </li>
        </ul>
      </nav>

    </>
  )
}

export default App
