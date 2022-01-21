import React, {useContext, useState} from "react";
import { GalleryContext } from "../../context/GalleryContext";
import { GalleryImage } from "./GalleryImage";
import { Lightbox } from "./Lightbox";

export const GalleryComponent = () => {
    const {galleryStore: {gallery, lightBoxStatus}} = useContext(GalleryContext);
    const [heading] = useState('Travelers captured Images');
    return(
        <>
        {lightBoxStatus ? <Lightbox /> : null}
        <div className="gallery">
            <div className="container">
                <h2 className="heading mb-55">{heading}</h2>
                <div className="row">
                    {gallery.length > 0 ? gallery.map((glr, index)=>(
                        <GalleryImage key={index} glr={glr} />
                    )) : null}
                </div>
            </div>
        </div>
        </>
    )
}