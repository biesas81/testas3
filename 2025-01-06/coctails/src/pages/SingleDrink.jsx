import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SingleDrink = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp);
                if (!resp.drinks)
                    return;
                setData(resp.drinks)
            })
    }, [])

    const formatIngredients = (value) => {

        const ingredients = [];

        for (let i = 1; i <= 15; i++) {
            const ingredient = value[`strIngredient${i}`];
            const measure = value[`strMeasure${i}`];

            if (ingredient !== null) {
                ingredients.push(
                    <li key={i} className="fst-italic">
                        {ingredient} {measure && measure !== 'null' ? measure : ''}
                    </li>
                );
            }
        }

        return <ul>{ingredients}</ul>;
    };

    const handleBackButton = () => {
        navigate(-1);

    }

    return (
        <>
            {data.map((value) =>
                <div key={value.idDrink} className="row py-3">
                    <div className="col-4">
                        <button className="btn btn-light mb-3" onClick={handleBackButton}>Atgal</button>
                        <img src={value.strDrinkThumb} />
                    </div>
                    <div className="col-8">
                        <h3>{value.strDrink}</h3>
                        <p>{value.strInstructions}</p>
                        <div className="d-flex gap-2">
                            <strong>Category:</strong>
                            <span className="fst-italic text-decoration-underline">{value.strCategory}</span>
                        </div>
                        <div className="d-flex gap-2">
                            <strong>Type:</strong>
                            {/* <Link to={"/single/" + value.idDrink}> */}
                                 <span className="fst-italic text-decoration-underline" 
                            >{value.strAlcoholic}</span>
                            {/* </Link> */}
                        </div>
                        <div className="d-flex gap-2">
                            <strong>Glass type:</strong>
                            <span className="fst-italic text-decoration-underline" 
                            >{value.strGlass}</span>
                        </div>
                        <div className='my-3'>
                            <h5>Ingriedents:</h5>
                            {formatIngredients(value)}
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}


export default SingleDrink;