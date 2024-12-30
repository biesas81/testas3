const Cart = ({ setShowCart, krepselis, setKrepselis }) => {
    return (
        <>
            <div className="container">
                <div className="chart d-flex">
                    <div className="col-8">
                        <div className="d-flex justify-content-between">
                            <h3>Shopping Cart</h3>
                            <p className="prekiukiekis">{krepselis.length} items</p>
                        </div>
                        <table className="result table">
                            <tbody>
                        {krepselis.map((reiksme, index) =>
                            <tr key={index}>
                                <td className="photo">
                                    <div className="backround">
                                        <img src={reiksme.thumbnail} alt="" />
                                    </div>
                                </td>
                                <td>
                                    <div className="text-primary">{reiksme.category}</div>
                                    <div>{reiksme.title}</div>
                                </td>
                                <td>
                                    <div>
                                        <input type="number" defaultValue={reiksme.quantity} placeholder="Kiekis" />
                                    </div>
                                </td>
                                <td>
                                    <div>$ {(reiksme.price*(100-reiksme.discountPercentage)/100).toFixed(2)}</div>
                                </td>
                                <td>
                                    <div onClick={() => {
                                        console.log('veikia');
                                        const naujiPirkiniai = [...krepselis];
                                        naujiPirkiniai.splice(index,1);
                                        setKrepselis([...naujiPirkiniai]);
                                    }}
                                        ><i className="bi bi-x-square"></i></div>
                                </td>
                            </tr>
                        )}
                       </tbody>

                        </table>
                        <button onClick={() => setShowCart(false)}><i className="bi bi-arrow-left"></i>Back to shop</button>
                    </div>
                    <div className="col-4 p-3">
                        <h3>Summary</h3>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart