import { useReducer} from "react";
import { DestinationContext } from "../DestinationContext";
import { DestinationReducer } from "../reducers/DestinationReducer";
import { destinations } from "../../data/destinations";
import Cities from "../../data/cities";

export const DestinationProvider = (props) => {
    const [destinationsData, dispatch] = useReducer(DestinationReducer, {
        destinations,
        details: {},
        cities: Cities,
        filteredCities: [],
    });
    return(
        <DestinationContext.Provider value={{destinationsData, dispatch}}>
            {props.children}
        </DestinationContext.Provider>
    );
};