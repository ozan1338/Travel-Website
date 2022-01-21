import React from "react";
import {BsStarFill, BsStar} from "react-icons/bs"
import { LazyLoadImage } from "react-lazy-load-image-component";

export const ReviewBody = ({review}) => {
    const rating = (star) => {
        let container = []
        for(let i = 1; i <= 5; i++) {
            if(i <= star){
                container.push(<BsStarFill key={i} size={13} color="#df2189"
                className="reviews_body_contents_info_rating_icon"
                 />)
            }else{
                container.push(<BsStar key={i} size={13} color="#df2189"
                className="reviews_body_contents_info_rating_icon"
                 />)
            }
        }
        return container;
    }
    return (
        <div className="col-4 p-15">
            <div className="reviews_body">
                <div className="reviews_body_contents">
                    <div className="reviews_body_contents_image">
                        <LazyLoadImage src={review.image} alt={review.image}/>
                    </div>
                    <div className="reviews_body_contents_info">
                        <div className="reviews_body_contents_info_name">
                            {review.name}
                        </div>
                        <div className="reviews_body_contents_info_rating">
                            {rating(review.stars)}
                        </div>
                        <div className="reviews_body_contents_info_comment">
                            {review.comment}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}