import React from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import { GiPositionMarker } from "react-icons/gi";
import { Link } from "react-router-dom";

export const DestinationList = ({destination}) => {
    return (
        <div className="col-3 p-15">
            <div className="destination_card">
                <div className="destination_card_img">
                    <LazyLoadImage src={destination.image} alt={destination.name}/>
                </div>
                <div className="destination_card_layer">
                    <div className="destination_card_layer_content">
                        <GiPositionMarker size={20} />
                        <div className="destination_card_layer_content_country">
                            {destination.name}
                        </div>
                    </div>
                </div>
                <div className="destination_card_info">
                    <div className="destination_card_info_text">
                        <Link className="btn-white" to={`/details/${destination.id}`}>Explore</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}