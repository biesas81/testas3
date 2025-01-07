import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li><Link to="/">Titulinis</Link></li>
                        <li><Link to="/apie-mus">Apie Mus</Link></li>
                        <li><Link to="/istorija">Istorija</Link></li>
                        <li><Link to="/produktai">Produktai</Link></li>
                        <li><Link to="/kontaktai">Kontaktai</Link></li>

                    </ul>
                </nav>
            </div>
        </header>
    )   
}

export default Header;