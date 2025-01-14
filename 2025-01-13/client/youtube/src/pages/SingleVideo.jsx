import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const SingleVideo = () => {
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
        axios.put(`/api/${id}/increment-views`)
            .then(resp => setData(resp.data)) // Atnaujinti peržiūrų skaičių ekrane
            .catch((err) => {
                console.error('Klaida padidinant peržiūras', err);
                setAlert({
                    message: err.response.data,
                    status: 'danger'
            });
        })
    }, [id]);


    if (!data) {
        return <div>Įkeliama...</div>;
    }

    return (
        <>
            {alert.message ?
                <div className={"mt-4 alert alert-" + alert.status}>
                    {alert.message}
                </div>
                :
                <>
                    <h1 className="mb-5">{data.title}</h1>
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${data.videoId}`}
                        title={data.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                    <div>Peržiūros: {data.viewCount}</div>
                    <div className='my-3'>Category: {data.category}</div>
                    <strong>Description:</strong>
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

export default SingleVideo;