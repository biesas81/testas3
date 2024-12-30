import './components.css'

const Rating = (props) => {

    return (
        
        <div className="rating">
            <div className="active" style={{ width: `${props.rating * 20}%` }} >
                <div className="wrapper">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                </div>
            </div>
            <div className="inactive">
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
            </div>
        </div>

    );
}

export default Rating;



// style={width: {props.rating * 2 * 10}%}