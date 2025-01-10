import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { extractFormData } from '../helpers/util.js';

const EditPost = () => {
    const [data, setData] = useState({});
    const [alert, setAlert] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get('/api/' + id)
        // Aktyvuojama eilutė, jei statuso kodas 200
        .then(resp => setData(resp.data))
        // Bet kuriuo kitu gautu statuso kodu:
        .catch(err => setAlert({
            message: err.response.data,
            status: 'danger'
        }));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = extractFormData(e.target);

        axios.post('/api', data)
        .then(resp => {
            setAlert({
                message: resp.data,
                status: 'success'
            });
            
            // Peradresavimo kūrimas
            setTimeout(() => {
                navigate('/admin');
            }, 3000);
        })
        .catch(err => setAlert({
            message: err.response.data,
            status: 'danger'
        }));
    }

    return (
        <>
            <h1 className="mb-5">Edit Product</h1>
            
            {alert.message && 
                <div className={"mt-4 alert alert-" + alert.status}>
                    {alert.message}
                </div>
            }

            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        name="title"
                        placeholder="Įveskite prekės pavadinimą"
                        required
                        defaultValue={data.title}
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        name="thumbnail"
                        placeholder="Įveskite nuotraukos adresą"
                        required
                        defaultValue={data.thumbnail}
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        name="brand"
                        placeholder="Įveskite brandą"
                        required
                        defaultValue={data.brand}
                    />
                </div>
                <div className="mb-3">
                    <textarea 
                        className="form-control" 
                        name="description"
                        placeholder="Įveskite aprašymą"
                        required
                        defaultValue={data.description}
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        name="category"
                        placeholder="Įveskite kategoriją"
                        required
                        defaultValue={data.category}
                    />
                </div>
                <div className='d-flex'>
                <div className="mb-3">
                    <input 
                        type="number" 
                        className="form-control" 
                        name="price"
                        placeholder="Įveskite kainą"
                        step=".01"
                        required
                        defaultValue={data.price}
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="number" 
                        className="form-control" 
                        name="discountPercentage"
                        placeholder="Įveskite nuolaidą"
                        step=".01"
                        required
                        defaultValue={data.discountPercentage}
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="number" 
                        className="form-control" 
                        name="stock"
                        placeholder="Įveskite prekės likutį"
                        required
                        defaultValue={data.stock}
                    />
                </div>
                </div>
                <div className="mb-3">
                    <input 
                        type="number" 
                        className="form-control" 
                        name="rating"
                        placeholder="Įveskite ratingą"
                        step=".01"
                        required
                        defaultValue={data.rating}
                    />
                </div>
                <div>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    );
}

export default EditPost;