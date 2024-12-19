import Button from './Button.jsx'
import Rating from './ProductRating.jsx';
import ProductPrice from './ProductPrice.jsx';


const Product = (props) => {

    return (
        <>
            <tr>
                <td className="foto">
                    <div className="btn btn-danger nuolaida">-{props.nuolaida.toFixed(0)} %</div>
                    <div className="background">
                        <img src={props.foto} alt="" />
                    </div>
                </td>
                <td>
                    <div className="text-primary">{props.pavadinimas}</div>
                    <div><Rating rating={props.rating} /> </div>
                    <div className="mt-5">{props.aprasymas}</div>
                </td>
                <td>
                    <ProductPrice
                        kaina={props.kaina}
                        nuolaida={props.nuolaida} />
                    <Button text="Back to Shop" />
                </td>
            </tr>
        </>
    );
}

export default Product;