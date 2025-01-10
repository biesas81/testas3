import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { extractFormData } from '../helpers/util.js';

const NewPost = () => {
    const navigate = useNavigate();
    const [alert, setAlert] = useState({});

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
                navigate('/');
            }, 3000);
        })
        .catch(err => setAlert({
            message: err.response.data,
            status: 'danger'
        }));
    }

    return (
        <>
            <h1 className="mb-5">New Product</h1>

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
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        name="thumbnail"
                        placeholder="Įveskite nuotraukos adresą"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        name="brand"
                        placeholder="Įveskite brandą"
                        required
                    />
                </div>
                <div className="mb-3">
                    <textarea 
                        className="form-control" 
                        name="description"
                        placeholder="Įveskite aprašymą"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        name="category"
                        placeholder="Įveskite kategoriją"
                        required
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
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="number" 
                        className="form-control" 
                        name="stock"
                        placeholder="Įveskite prekės likutį"
                        required
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
                    />
                </div>
                <div>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    );
}

export default NewPost;