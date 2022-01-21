import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useContext } from "react";
import { GalleryContext } from "../../context/GalleryContext";
import {CLOSE_LIGHTBOX} from "../../context/types/GalleryTypes"

export const Lightbox = () => {
    const {galleryStore: {currentLightBox}, dispatch}= useContext(GalleryContext)

    const closeLightBox = (event) => {
        const className = event.target.getAttribute('class')
        if(className === 'gallery_lightbox'){
            dispatch({type: CLOSE_LIGHTBOX})
        }
    }

    return(
        <div className="gallery_lightbox" onClick={closeLightBox}>
            <h4>{currentLightBox.name}</h4>
            <div className="gallery_lightbox_card">
                <div className="gallery_lightbox_card_image">
                    <LazyLoadImage src={currentLightBox.image} alt={currentLightBox.name} />
                </div>
            </div>
        </div>
    )
}