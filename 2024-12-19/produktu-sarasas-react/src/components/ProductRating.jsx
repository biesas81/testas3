import './components.css'

const Rating = (props) => {

    return (
        
        <div className="rating">
            <div className="active" style={{ width: `${props.rating * 20}%` }} >
                <div className="wrapper">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                </div>
            </div>
            <div className="inactive">
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
            </div>
        </div>

    );
}

export default Rating;



// style={width: {props.rating * 2 * 10}%}