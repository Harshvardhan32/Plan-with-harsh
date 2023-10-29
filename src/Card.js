import { useState } from "react";

function Card({ image, name, info, price, id, removeTour }) {

    const [readMore, setreadMore] = useState(false);

    const description = readMore ? info : `${info.substring(0, 200)}....`;

    function readMoreHandler() {
        setreadMore(!readMore);
    }

    return (
        <div className="card">
            <img src={image} className="image" />

            <div className="tour-info">
                <div className="tour-details">
                    <h3 className="tour-price">{price}</h3>
                    <h3 className="tour-name">{name}</h3>
                    <div className="description">
                        {description}
                        <span className="read-more" onClick={readMoreHandler}>
                            {readMore ? 'Show less' : 'Read More'}
                        </span>
                    </div>
                </div>
            </div>

            <div>
                <button className="red-btn" onClick={() => removeTour(id)}>Not Interested</button>
            </div>
        </div>
    );
}

export default Card;