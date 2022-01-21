import React from "react";
import {BsCheck2Square, BsXSquare } from "react-icons/bs";

export const Facilities = ({name,value}) => {
    return (
        <div className="cities_body_contents_facilities">
            <div className="cities_body_contents_facilities_name">
                {name}
            </div>
            <div className="cities_body_contents_facilities_value">
                {value ? <BsCheck2Square size={20} color="#34d399" /> 
                            : 
                            <BsXSquare size={20} color="#ff4d58" />}
            </div>
        </div>
    )
}