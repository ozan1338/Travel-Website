import {React,useState} from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Header = ({heading, paragraph, children, image})=>{
    const [initialItems] = useState({
        video: '/assets/videos/header.mp4',
        poster: '/assets/images/screen.png',
        logo: '/assets/images/logo.png',
    })

    return(
        <div className="header">
        <div className="container pr">
            <div className="header_logo">
                <img onClick={()=>window.location.href="/"} src={initialItems.logo} alt="logo" />
            </div>
        </div>
            <div className="header_video">
            {image ? <LazyLoadImage src={image} alt={image}/> : 
                    <video 
                        src={initialItems.video} 
                        autoPlay 
                        loop 
                        muted 
                        poster={initialItems.poster}>
                    </video>
            }
                
            </div>
            <div className="header_contents">
                <div className="container">
                    <div className="header_contents_text">
                        <div className="header_contents_text_child">
                            <h1 className="header_contents_text_child_h1">
                                {heading}
                            </h1>
                            <p className="header_contents_text_child_p">
                                {paragraph}
                            </p>
                            <div className="header_contents_text_child_link">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}