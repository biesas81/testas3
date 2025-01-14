import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [searchText, setSearchText] = useState('');
    
    const handleSearch = (event) => {
        event.preventDefault(); // Neleidžiame puslapio atnaujinimo
    };


    return ( 
        
        <header className="container text-bg-dark d-flex justify-content-between py-3 mb-5">
            <form onSubmit={handleSearch} className="d-flex">
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Ieškoti..."
                    className="form-control"
                />
                <Link to={`/search/${searchText}`} className="btn btn-outline-light ml-2">
                    Paieška
                </Link>
            </form>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-white">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin" className="nav-link text-white">Edit Video</Link>
                </li>
                <li className="nav-item">
                    <Link to="/new-video" className="nav-link text-white">New Video</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;