import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {useContext} from "react"
import {GalleryContext} from "../../context/GalleryContext"
import {OPEN_LIGHTBOX } from "../..//context/types/GalleryTypes"

export const GalleryImage = ({glr}) => {
    const {dispatch} = useContext(GalleryContext)
    const openLightBox = imageObject => {
        dispatch({type: OPEN_LIGHTBOX, payload: imageObject})
    }
    return(
        <div className="col-3">
            <div className="gallery_image">
                <LazyLoadImage src={glr.image} onClick={()=>openLightBox(glr)} />        
            </div>
        </div>
    )
}