import React, {useState,useContext} from "react";
import { ServicesLeft } from "./ServicesLeft";
import { SharedContext } from "../../context/SharedContext";
import { ServicesList } from "./ServicesList";

export const Services = () => {
    const {sharedData: {servicesData}} = useContext(SharedContext);
    
    const [state] = useState({
        heading: 'Why Customer Love Travel Friends? Because We Provide Unique Services',
        subHeading: 'Our Aim Is To Provide Profesional and Unique Services to Customers, And We Have Provided High Quality Services To Our Customer Thats Why They Love Travel Friends',

    })
    return(
        <div className="services">
            <div className="services_contents">
                <div className="container">
                    <div className="row ml-minus-15 mr-minus-15 services_contents_container">
                        <div className="col-6 p-15">
                            <ServicesLeft heading={state.heading} subHeading={state.subHeading} />
                        </div>
                        <div className="col-6 p-15">
                            <ServicesList services={servicesData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}