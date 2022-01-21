import React from "react";

export const DestinationDetails = ({title, text}) => {
    return(
        <div className="destinationInfo_details">
            <div className="destinationInfo_details_head">
                {title}
            </div>
            <div className="destinationInfo_details_text">
                {text}
            </div>
        </div>
    )
}