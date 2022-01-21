import React, {useState,useContext,useEffect} from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "../components/Header";
import { Model } from "../components/Model";
import { ModelContext } from "../context/ModelContext";
import { OPEN_MODEL } from "../context/types/ModelType";
import { Register } from "../auth/Register";
import { Login } from "../auth/Login";
import { Destination } from "../components/Destination";
import { Services } from "../components/services/Services";
import { Reviews } from "../components/reviews/Reviews";
import { GalleryComponent } from "../components/gallery/GalleryComponent";

export const Home = () =>{
    const {dispatch} = useContext(ModelContext);
    
    const [state] = useState({
        heading: 'WE ARE TRAVEL FRIEND',
        paragraph: 'Come and join us we travel the most famous and beautiful places in the wold'
    });

    const [registerModel] = useState('register');
    const [loginModel] = useState('login');

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <>
        <Helmet>
            <title>Travel Friends</title>
            <meta name="description" content="Travel to the world with travel friend" />
            <meta name="keyword" content="travel, travel tours, airline" />
        </Helmet>
            <Header heading={state.heading} paragraph={state.paragraph}>
                <button 
                    className="btn-default" 
                    onClick={()=> dispatch({type: OPEN_MODEL, payload: registerModel })}>
                Get Started</button>
            </Header>
            <Model current={registerModel}>
                <Register current={loginModel}/>
            </Model>
            <Model current={loginModel}>
                <Login current={registerModel}/>
            </Model>
            <Destination />
            <Services />
            <Reviews />
            <GalleryComponent />
        </>
    )
}