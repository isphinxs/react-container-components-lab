import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY;
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        fetch(URL)
            .then(resp => resp.json())
            .then(reviews => {
                // console.log(reviews);
                this.setState({reviews: reviews.results});
                // debugger;
                console.log(this.state);
            })
    }

    render() {
        // debugger;
        // const reviews = this.state.reviews.map(review => <MovieReviews review={review} />);
        return (
            <div className="latest-movie-reviews">
                <h3>Latest Movie Reviews</h3>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer;