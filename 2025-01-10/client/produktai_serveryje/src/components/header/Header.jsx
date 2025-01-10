import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <header className="text-bg-dark d-flex justify-content-center py-3 mb-5">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-white">Shop</Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin" className="nav-link text-white">Edit Products</Link>
                </li>
                <li className="nav-item">
                    <Link to="/new-product" className="nav-link text-white">New Product</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;