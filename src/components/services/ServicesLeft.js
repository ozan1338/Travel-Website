import React from "react"

export const ServicesLeft = ({heading, subHeading}) => {
    return ( 
        <div className="services_left">
            <h1 className="services_left_heading">
                {heading}
            </h1>
            <p className="services_left_paragraph">
                {subHeading}
            </p>
        </div>
    )
}