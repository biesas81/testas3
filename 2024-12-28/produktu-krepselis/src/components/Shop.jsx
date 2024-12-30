
import Rating from './ProductRating.jsx';
import ProductPrice from './ProductPrice.jsx';
import data from './products.js'


const Products = ({ setShowCart, setKrepselis, krepselis }) => {
   
    return (
        <>
            <div className="container">
                <div className="shop">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Prekė</th>
                                <th>Aprašas</th>
                                <th>Kaina</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((reiksme, index) =>
                                <tr key={index}>
                                    <td className="foto">
                                        <div className="btn btn-danger nuolaida" >-{reiksme.discountPercentage.toFixed(0)} %</div>
                                        <div className="background">
                                            <img src={reiksme.thumbnail}  alt="" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="text-primary" >{reiksme.title}</div>
                                        <div><Rating rating={reiksme.rating} /> </div>
                                        <div className="mt-5" >{reiksme.description}</div>
                                    </td>
                                    <td>
                                        <ProductPrice
                                            kaina={reiksme.price}
                                            nuolaida={reiksme.discountPercentage} />
                                        <button className="btn btn-warning"
                                            onClick={() => {
                                                
                                                if (krepselis.length === 0) {
                                                    const cartData = data[index];
                                                    cartData.quantity = 1;
                                                    krepselis.push(cartData);
                                                } else {
                                                    let found = false;
                                                    for (let i = 0; i < krepselis.length; i++) {
                                                        if (data[index].id === krepselis[i].id) {
                                                            console.log('Veikia')
                                                            krepselis[i].quantity++;
                                                            found = true;
                                                        } 
                                                    }
                                                    if(!found) {
                                                        const cartData = data[index];
                                                        cartData.quantity = 1;
                                                        krepselis.push(cartData);
                                                    }
                                                }

                                                // let krepselisIndex = krepselis.findIndex(value => value.id === reiksme.id);
                                                // if(krepselisIndex === -1) {
                                                //     const cartData = data[index];
                                                //     cartData.quantity = 1;
                                                //     krepselis.push(cartData);
                                                // } else {
                                                //     krepselis[krepselisIndex].quantity++;
                                                // }
                                                setShowCart(true);
                                                setKrepselis(krepselis);
                                            }}>Add To Cart</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}

export default Products