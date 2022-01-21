import React, {useContext} from "react";
import {Link} from "react-router-dom";
import { NavContext } from "../context/NavContext";

export const Nav = () => {
    const {state} = useContext(NavContext);
    return(
        <>
        {state ? <div className="navLayer"></div> : null}
            
                <div className={state ? 'nav nav-open':'nav nav-close'}>
                    <div className="nav_content">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </div>
                </div>
        </>

    );
}