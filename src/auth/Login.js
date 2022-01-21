import React, { useContext, useState } from "react";
import { ModelContext } from "../context/ModelContext";
import { OPEN_MODEL } from "../context/types/ModelType";

export const Login = (props) =>{
    const {dispatch} = useContext(ModelContext);
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const loginForm = (event) => {
        event.preventDefault();
        console.log(state);
    }
    return (
        <form onSubmit={loginForm}>
            <div className="model_heading">
                <h3>Login</h3>
            </div>
            <div className="group">
                <input type="email" name="" className="group_control" placeholder="Enter Your Email" 
                    onChange={(event)=> setState({...state, email: event.target.value})}
                    value={state.email}
                />
            </div>
            <div className="group">
                <input type="password" name="" className="group_control" placeholder="Enter Your Password" 
                    onChange={(event)=> setState({...state, password: event.target.value})}
                    value={state.password}
                />
            </div>
            <div className="group flex space-between y-center">
                <input type="submit" name="" className="btn-dark" value="Login" />
                <span onClick={()=> dispatch({type: OPEN_MODEL, payload: props.current})}>Create New Account?</span>
            </div>
        </form>
    )
}