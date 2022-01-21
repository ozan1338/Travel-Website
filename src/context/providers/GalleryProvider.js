import { useReducer } from "react";
import { GalleryContext } from "../GalleryContext";
import { GalleryReducer } from "../reducers/GalleryReduces";
import { gallery } from "../../data/gallery";

export const GalleryProvider = (props) => {
    const [galleryStore, dispatch] = useReducer(GalleryReducer, {
        gallery,
        lightBoxStatus: false,
        currentLightBox: {}
    });
    return(
        <GalleryContext.Provider value={{galleryStore, dispatch}}>
            {props.children}
        </GalleryContext.Provider>
    )
}
