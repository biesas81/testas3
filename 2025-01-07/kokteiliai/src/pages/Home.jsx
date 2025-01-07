import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ keyword, setKeyword }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (keyword === '')
            return;
        console.log('Veikia');

        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + keyword)
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp.drinks);
                if (!resp.drinks) {return}
                setData(resp.drinks)
            });
    }, [keyword]);

    return (
        <>
            <h1>Search Page</h1>
            <div className="row">
                {data.map(value =>
                    <div key={value.idDrink} className="col-12 col-md-4 mb-3">
                        <Link to={"/single/" + value.idDrink}>
                            <img src={value.strDrinkThumb} alt="" />
                        </Link>
                        <Link to={"/single/" + value.idDrink}>
                            <h4 className="mt-3">{value.strDrink}</h4>
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}

export default Home;