
const ProductPrice = (props) => {

    return (
        
            props.nuolaida > 0 ? 
            <div className="d-flex mt-4">
                  <div className="fs-4 fw-bolder text-danger">${(props.kaina*(100-props.nuolaida)/100).toFixed(2)}</div>
                 <div className="fs-6 text-decoration-line-through ms-2">${props.kaina}</div>
                 </div>
                : <div className="fs-4 fw-bolder">${props.kaina}</div>
        

    );
}

export default ProductPrice;