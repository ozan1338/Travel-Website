import React from "react";
import { Helmet } from "react-helmet-async";
import {useState} from "react"
import PageContainer from "../components/pagesComponent/PageContainer";

export const About = ()=>{
    const [state] = useState({
        heading: "about us",
        pageHeading: "world best travel agency company since 2022",
        message: `Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `
    })
    return (
        <>
        <Helmet>
            <title>About Page</title>
            <meta name="description" content="travel friends about page"></meta>
        </Helmet>
        <PageContainer data={state} />
        </>
    )
}