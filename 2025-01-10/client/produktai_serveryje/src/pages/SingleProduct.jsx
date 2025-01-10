import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const SinglePost = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [alert, setAlert] = useState({});
    
    useEffect(() => {
        axios.get('/api/' + id)
        .then(resp => setData(resp.data))
        // Bet kuriuo kitu gautu statuso kodu:
        .catch(err => setAlert({
            message: err.response.data,
            status: 'danger'
        }));
    }, []);

    return (
        <>
            {alert.message ? 
                <div className={"mt-4 alert alert-" + alert.status}>
                    {alert.message}
                </div>
                :
                <>
                    <h1 className="mb-5">{data.title}</h1>
                    <img src={data.thumbnail} style={{ 
                            width: '100%',
                            height: 300,
                            objectFit: 'cover'
                        }}
                        className="mb-5"
                    />
                    <div>
                        {data.description?.split('\n').map((value, index) => 
                            <span key={index}>
                                {value} <br />
                            </span>
                        )}
                    </div>
                </>
            }
        </>
    );
}

export default SinglePost;