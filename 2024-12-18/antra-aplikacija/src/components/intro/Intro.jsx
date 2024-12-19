import Button from '../buttons/Button.jsx'
import './Intro.css';
import pav from './pav.jpg';


export default function Intro() {

    return (
        <>
            <div className='col-6'>
                <h1>Vite</h1>
                <h1>Next Generation Fronted Tooling</h1>
                <p>Get ready for a development enviroment that can finally catch up with you.</p>
                <div className='d-flex mygtukai'>
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                </div>
            </div>
            <div className='col-6'>
                <img src={pav} alt={'Stringas1'} />
            </div>

        </>
    );
}