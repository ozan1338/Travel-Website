import React, {useContext, useState} from "react";
import { SharedContext } from "../../context/SharedContext";
import { ReviewBody } from "./ReviewsBody";

export const Reviews = () => {
    const [heading] = useState('What our Customer Saying?')
    const {sharedData: {reviews}} = useContext(SharedContext);
    console.log('Your data: ', reviews);
    return (
        <div className="reviews">
            <div className="container">
                <h2 className="heading">{heading}</h2>
                <div className="row ml-minus-15 mr-minus-15">
                    {reviews.length > 0 ? reviews.map((review, index)=>(
                        <ReviewBody key={index} review={review} />
                    )): null}
                </div>
            </div>
        </div>
    )
}