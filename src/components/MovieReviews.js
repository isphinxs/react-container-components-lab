// Code MovieReviews Here
import React from "react";

function MovieReviews(props) {
    // debugger;
    const reviews = props.reviews ? props.reviews.map(review => 
        <div className="review">
            <p><a href={review.link.url}>{review.display_title}</a></p>
            <ul>
                {review.mpaa_rating ? <li key={review.mpaa_rating}>{review.mpaa_rating}</li> : null}
                <li key="summary">{review.summary_short}</li>
            </ul>
        </div>
    )
        : 
        null;

    return (
        <div className="review-list">
            {reviews}
        </div>
    );
}

MovieReviews.defaultProps = {
    rating: ""
}

export default MovieReviews;
