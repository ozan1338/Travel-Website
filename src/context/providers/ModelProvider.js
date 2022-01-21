import { useReducer } from "react";
import { ModelContext } from "../ModelContext";
import { ModelReducer } from "../reducers/ModelReducer";

export const ModelProvider = (props) => {
    

    const [state, dispatch] = useReducer(ModelReducer, {
        modelStatus:false,
        current: ''
    });

    return (
        <ModelContext.Provider 
            value={{
                state, 
                dispatch, 
                }}>{props.children}</ModelContext.Provider>
    )
}