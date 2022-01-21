import React from "react";
import { BsStopwatch } from "react-icons/bs";
import { Facilities } from "./Facilities";

export const CityContents = ({name, duration, price, room, food}) => {
    const formate = (price) => {
        return `${price}.00`;
    }
    return (
        <div className="cities_body_contents">
            <div className="cities_body_contents_top">
                <div className="cities_body_contents_top_name">
                    {name}
                </div>
                <div className="cities_body_contents_top_duration">
                    <BsStopwatch size={18} color="#df2189" />
                    <div className="cities_body_contents_top_duration_time">
                        {duration}
                    </div>
                </div>
            </div>
            <div className="cities_body_contents_price">
                <span className="cities_body_contents_price_dollar">$</span>
                {formate(price)}
            </div>
            <Facilities name="room" value={room}  />
            <Facilities name="food" value={food}  />
            <div className="cities_body_contents_button">
                <button className="btn-dark-sm">Buy Now</button>
            </div>
        </div>
    )
}