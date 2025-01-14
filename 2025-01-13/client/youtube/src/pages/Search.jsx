import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';  // Naudojama paimti `text` iš URL
import axios from 'axios';

const Search = () => {
    const { text } = useParams(); // Paieškos frazė iš URL parametro
    const [results, setResults] = useState([]);
    const [alert, setAlert] = useState({});

    useEffect(() => {
        // Atsiunčiame užklausą į serverį su paieškos fraze
        axios.get(`/api/search/${text}`)
            .then((resp) => setResults(resp.data))  // Užpildome rezultatus
            .catch((err) => {
                console.error('Paieškos klaida:', err.response ? err.response : err);
                setAlert({
                    message: err.response ? err.response.data : 'Klaida atliekant paiešką',
                    status: 'danger'
                });
            });
    }, [text]);

    return (
        <div className="container">
            <h1 className='mb-4'>Search results: "{text}"</h1>
            {alert.message ? (
                <div className={`mt-4 alert alert-${alert.status}`}>
                    {alert.message}
                </div>
            ) : (
                <div className="row">
                    {results.map((value) => (
                          <div key={value._id} className="col-12 col-md-3 mb-3">
                          <Link to={"/video/" + value._id }>
                              <img src={`https://img.youtube.com/vi/${value.videoId}/default.jpg`} alt="" style={{width: '100%'}}/>
                          </Link>
                          <Link to={"/video/" + value._id}>
                              <h4 className="mt-3">{value.title}</h4>
                          </Link>
                      </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;