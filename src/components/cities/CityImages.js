import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const CityImages = ({image, status}) => {
    return(
        <div className="cities_body_image">
            <LazyLoadImage src={image} alt={image} />
            <div className={status === 'Bestselling' ? 'bestselling' 
                            : status === 'New' ? 'new' 
                            : status === 'Hot' ? 'hot' : null}>
                            {status}
            </div>
        </div>
    )
}