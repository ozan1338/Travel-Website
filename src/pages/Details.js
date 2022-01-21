import React, {useContext,useEffect} from "react";
import { useParams } from "react-router";
import { DestinationContext } from "../context/DestinationContext";
import { CITIES, DETAILS } from "../context/types/DestinationType";
import { Header } from "../components/Header";
import { Helmet } from "react-helmet-async";
import { DestinationInfo } from "../components/DestinationInfo";
import { Cities } from "../components/cities/Cities";

export const Details = () => {
    const {destinationsData, dispatch} = useContext(DestinationContext);
    const {details, filteredCities} = destinationsData;
    const {id} = useParams(); 
    useEffect(()=>{
        dispatch({type: DETAILS, payload: id});
        dispatch({ type: CITIES, payload: id});
        window.scrollTo(0,0)
    }, [dispatch, id]);
    return(
        <>
        <Helmet>
            <title>{details.name}</title>
        </Helmet>
            <Header heading={details.name} image={details.bigImage}></Header>
            <DestinationInfo details={details}/>
            <Cities cities={filteredCities} name={details.name} />
        </>
    );
}