import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const Header = ({ keyword, setKeyword, setRefresh }) => {

    const abc = () => {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        const abc = [];
        for (let i = 0; i < alphabet.length; i++) {
            abc.push(
                <Link key={i} to={"/byletter/" + alphabet[i]}>
                    <li>{alphabet[i]}</li>
                </Link>
            )
        }
        return abc;
    }

    const input = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.current.value === '') {
            return;
        }
        navigate('/');
        setKeyword(input.current.value);
    }

    return (
        <header >
            <div className='d-flex gap-5'>
                <Link to={"/"} onClick={() => setKeyword('')}className="btn btn-secondary">Home</Link>
                <Link to={"/lucky"}
                onClick={() => setRefresh((prev) => !prev)}
                    className="btn btn-secondary">You are Lucky</Link>
            </div>
            <form
                className="input-group my-2"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    className="form-control"
                    placeholder="Please enter cocktail name"
                    ref={input}
                    required
                />
                <button className="btn btn-primary">Search</button>
            </form>

            <ul className='d-flex justify-content-evenly'>
                {abc()}
            </ul>
        </header>
    );
}

export default Header;