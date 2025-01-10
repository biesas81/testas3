import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);
    const [alert, setAlert] = useState({});
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        axios.get('/api')
        // Aktyvuojama eilutė, jei statuso kodas 200
        .then(resp => setData(resp.data))
        // Bet kuriuo kitu gautu statuso kodu:
        .catch(err => setAlert({
            message: err.response.data,
            status: 'danger'
        }));
    }, [refresh]);

    const handleDelete = (id) => {
        axios.delete('/api/' + id)
        .then(resp => {
            setAlert({
                message: resp.data,
                status: 'success'
            })
            
            setRefresh(!refresh);
        })    
        .catch(err => setAlert({
            message: err.response.data,
            status: 'warning'
        }));
    }

    return (
        <>
            <div className="container">
                <h1>Admin Page</h1>

                {alert.message && 
                    <div className={"mt-4 alert alert-" + alert.status}>
                        {alert.message}
                    </div>
                }
                {alert.status !== 'danger' &&
                    <table className="table mt-4">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Rating</th>
                                <th>Price</th>
                                <th>Discount</th>
                                <th>In Stock</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((value) => 
                                <tr key={value._id}>
                                    <td>{value._id}</td>
                                    <td>{value.title}</td>
                                    <td>{value.rating}</td>
                                    <td>{value.price}</td>
                                    <td>{value.discountPercentage}</td>
                                    <td>{value.stock}</td>
                                    <td>   
                                        <div className="d-flex gap-3">
                                            <Link 
                                                to={"/edit-product/" + value._id}
                                                className="btn btn-warning"
                                            >Edit</Link>
                                            <button 
                                                className="btn btn-danger"
                                                onClick={() => handleDelete(value._id)}
                                            >Delete</button>
                                        </div>
                                    </td>                                
                                </tr>
                            )}
                        </tbody>
                    </table>
                }
            </div>
        </>
    )
}

export default Home;