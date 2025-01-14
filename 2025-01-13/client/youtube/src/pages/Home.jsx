import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);
    const [alert, setAlert] = useState({});

    useEffect(() => {
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
                <h1>Youtube</h1>
                {alert.message ?
                    <div className={"mt-4 alert alert-" + alert.status}>
                        {alert.message}
                    </div>
                    :
                    <div className="row">
                        {data.map((value) =>
                            <div key={value._id} className="col-12 col-md-3 mb-3">
                                <Link to={"/video/" + value._id }>
                                    <img src={`https://img.youtube.com/vi/${value.videoId}/default.jpg`} alt="" style={{width: '100%'}}/>
                                </Link>
                                <Link to={"/video/" + value._id}>
                                    <h4 className="mt-3">{value.title}</h4>
                                </Link>
                            </div>
                        )}
                    </div>
                }
            </div>
        </>
    )
}

export default Home;