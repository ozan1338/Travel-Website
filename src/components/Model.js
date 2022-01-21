import React, {useContext} from "react";
import { ModelContext } from "../context/ModelContext";
import { CLOSE_MODEL } from "../context/types/ModelType";

export const Model = (props) =>{
    const {state, dispatch} = useContext(ModelContext);
    
    const close = (event) =>{
        if(event.target.getAttribute('class') === 'model'){
            dispatch({type: CLOSE_MODEL});
        }
    }

    return ( 
        state.modelStatus && state.current === props.current ? 
        <div className="model" onClick={close}>
            <div className="model_body">
                  {props.children}
            </div>
        </div>
        :
        ''
    )
};