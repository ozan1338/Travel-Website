import React from 'react';
import { Header } from '../Header';
import {Link} from "react-router-dom"
import AboutImage from './AboutImage';

export default function PageContainer({data}) {
    return (
        <>
        <Header heading={data.heading} />
        <div className='page'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'><AboutImage /></div>
                    <div className='col-6'>
                        <div className='page_info'>
                            <h2 className='heading'>{data.heading}</h2>
                            <h1 className='page_info_heading'>{data.pageHeading}</h1>
                            <p className='page_info_msg'>{data.message}</p>
                            <div className='page_info_link'>
                                <Link className='btn-dark' to="/">go back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


