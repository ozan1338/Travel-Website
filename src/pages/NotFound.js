import React,{useState} from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";

export const NotFound = ()=>{
    const [state] = useState({
        heading: 'Oops, 404',
        paragraph: 'Sorry, The Page You are Looking For Does Not Exist',
        image: '/assets/images/404.jpg'
    })
    return (
        <>
        <Helmet>
            <title>Not Found</title>
            <meta name="description" content="travel friends not found page"></meta>
        </Helmet>
        <Header heading={state.heading} paragraph={state.paragraph} image={state.image} >
            <Link to="/" className="btn-default">go to home</Link>
        </Header>
        </>
    )
}