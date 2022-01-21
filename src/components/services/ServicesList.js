import React, {useState} from "react";
import {BiChevronRight} from "react-icons/bi";

export const ServicesList = ({services}) => {
    const [current, setCurrent] = useState(0);
    const showDetails = (index) => {
        setCurrent(index);
    }
    return services.length > 0 ? services.map((service, index)=>(
        <div className="services_list" key={index}>
            <h4 className={`services_list_heading ${
                            current === index 
                            ? 'services_list_heading-active' 
                            : 'services_list_heading-normal'}`} 
                            onClick={() => showDetails(index)}>
                            <BiChevronRight className={`${
                                current === index ? 
                                'services_rotate': 
                                'services_back'}`} size={20} color={`${current === index ? '#ff4d58':'black'}`}/>
                                {service.heading}
            </h4>
            <p className={`services_list_details ${current === index ? 'services_list_details-show': null}`}>
                {service.p}
            </p>
        </div>
    )) 
    : null
}