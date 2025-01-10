import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Rating from '../components/ProductRating.jsx';
import ProductPrice from '../components/ProductPrice.jsx';

const Home = () => {
    const [data, setData] = useState([]);
    const [alert, setAlert] = useState({});

    useEffect(() => {
        // fetch('/api')
        // .then(resp => resp.json())
        // .then(resp => setData(resp));

        axios.get('/api')
            // Aktyvuojama eilutė, jei statuso kodas 200
            .then(resp => setData(resp.data))
            // Bet kuriuo kitu gautu statuso kodu:
            .catch(err => setAlert({
                message: err.response.data,
                status: 'danger'
            }));
    }, []);

    return (
        <>
            <div className="container">
                <h1>Shop</h1>
                {alert.message ?
                    <div className={"mt-4 alert alert-" + alert.status}>
                        {alert.message}
                    </div>
                    :
                    <div className="shop">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((value) =>
                                    <tr key={value._id}>
                                        <td className="foto">
                                            <div className="btn btn-danger nuolaida" >-{value.discountPercentage} %</div>
                                            <div className="background">
                                                <img src={value.thumbnail} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <Link to={"/product/" + value._id}>
                                                <div className="text-primary" >{value.title}</div>
                                            </Link>

                                            <div><Rating rating={value.rating} /> </div>
                                            <div className="mt-5" >{value.description}</div>
                                        </td>
                                        <td>
                                            <ProductPrice
                                                kaina={value.price}
                                                nuolaida={value.discountPercentage} />
                                            <button
                                                className="btn btn-warning mt-4"
                                                style={{ width: 150 }}
                                            >Add To Cart</button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </>
    )
}

export default Home;