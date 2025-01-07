import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Category = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + id)
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp.drinks);
            if (!resp.drinks) {return}
            setData(resp.drinks)
        });
    }, []);

    return (
        <>
            <h1>Category Page</h1>
            <div className="row">
                {data.map(value => 
                    <div key={value.idDrink} className="col-12 col-md-4 mb-3">
                        <Link 
                            to={"/single/" + value.idDrink}
                        >
                            <img src={value.strDrinkThumb} alt="" />
                        </Link>
                        <Link 
                            to={"/single/" + value.idDrink}
                        >
                            <h4 className="mt-3">{value.strDrink}</h4>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}

export default Category;