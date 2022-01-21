import React, {useContext, useState} from "react";
import { ModelContext } from "../context/ModelContext";
import { OPEN_MODEL } from "../context/types/ModelType";

export const Register = (props) => {
    const {dispatch} = useContext(ModelContext);
    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    });

    const registerForm = (event) =>{
        event.preventDefault();
        console.log(state);
    }
    return (
        <form onSubmit={registerForm}>
            <div className="model_heading">
                <h3>Create New Account</h3>
            </div>
            <div className="group">
                <input type="text" name="" className="group_control" placeholder="Enter Your Name" 
                    onChange={(event) => setState({...state, name: event.target.value})}
                    value={state.name}
                />
            </div>
            <div className="group">
                <input type="email" name="" className="group_control" placeholder="Enter Your Email" 
                    onChange={(event) => setState({...state, email: event.target.value})}
                    value={state.email}
                />
            </div>
            <div className="group">
                <input type="password" name="" className="group_control" placeholder="Create Your Password" 
                    onChange={(event) => setState({...state, password: event.target.value})}
                    value={state.password}
                />
            </div>
            <div className="group flex space-between y-center">
                <input type="submit" name="" className="btn-dark" value="Register" />
                <span onClick={()=> dispatch({type: OPEN_MODEL, payload: props.current})}>Already Have Account?</span>
            </div>
        </form>
    );
};