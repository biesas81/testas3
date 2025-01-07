import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('margarita');

    useEffect(() => {
        const savedSearch = localStorage.getItem('searchTerm');
        if (savedSearch) {
            setSearchTerm(savedSearch);
        } else {
            setSearchTerm('margarita');
        }
    }, []);


    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp);
                if (!resp.drinks)
                    return;
                setData(resp.drinks)
            })
    }, [searchTerm])

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = e.target[0].value;
        setSearchTerm(inputValue);
        localStorage.setItem('searchTerm', inputValue)
    }

    return (
        <>

            <div className="container py-5">
                <div className="main">
                    <form onSubmit={handleSubmit} className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Įveskite norimo kokteilio pavadinimą"
                        defaultValue={searchTerm} />
                        <button className="btn btn-primary">Ieškoti</button>
                    </form>
                </div>
            </div>
            <div className="result d-flex flex-wrap">
                {data.map((value, index) =>
                    <div key={index} className="col-12 col-md-3 p-3">
                        <div >
                            <Link to={"/single/" + value.idDrink}>
                                <img src={value.strDrinkThumb} />
                            </Link>
                        </div>
                        <div >
                            <Link to={"/single/" + value.idDrink}>
                                <h4>{value.strDrink}</h4>
                            </Link>
                            <p>{value.strAlcoholic}</p>
                        </div>

                    </div>
                )}
            </div>
        </>
    )
}

export default Home;