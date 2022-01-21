import {useState, useContext} from "react";
import { DestinationContext } from "../context/DestinationContext";
import { DestinationList } from "./DestinationList";

export const Destination = () => {
    const {destinationsData: {destinations}} = useContext(DestinationContext);
    
    const [state] = useState({
        heading: "Discover the most engaging places in the world with Travel Friends",
        paragraph: "Travel is a brutality. It forces you to trust strangers and to lose sight of all that familiar comforts of home and friends.You are constantly of balance. Nothing is yours except the essential things Air, Sleep, Dream, the sea, the sky-all things tending towards the eternal or what we imagine of it.",
    });
    return (
        <div className="destination">
            <div className="container">
            
                <div className="row">
                    <div className="col-6 p-15">
                        <h3 className="destination_heading">{state.heading}</h3>
                    </div>
                    <div className="col-6 p-15">
                        <p className="destination_paragraph">
                            {state.paragraph}
                        </p>
                    </div>
                </div>
            </div>
            <div/>
            <div className="destination_block">
                <div className="row ">
                    {destinations.map((destination)=>(
                        <DestinationList destination={destination} key={destination.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}