import React, {useState} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function AboutImage() {
    const [state] = useState('/assets/about/about.jpg')
    return (
            <div className='page_image'>
                <LazyLoadImage src={state} alt="about-image" />
            </div>
        );
}
