import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY;
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?';
            // + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: "",
        reviews: []
    }

    // componentDidMount() {
    //     fetch(URL)
    //         .then(resp => resp.json())
    //         .then(reviews => {
    //             // console.log(reviews);
    //             this.setState({reviews: reviews.results});
    //             // console.log(this.state);
    //         })
    // }

    handleSubmit = event => {
        event.preventDefault();
        // debugger;
        const searchTerm = this.state.searchTerm;
        const searchURL = URL + `query=${searchTerm}&api-key=${NYT_API_KEY}`;
        fetch(searchURL)
            .then(resp => resp.json())
            .then(reviews => {
                // console.log(reviews);
                this.setState({reviews: reviews.results});
                // console.log(this.state);
                // debugger;
            })
    }

    updateSearchTerm = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        // const reviews = this.state.reviews ? this.state.reviews.map(review => <MovieReviews review={review} />)
        //     :
        //     null;
        return (
            <div className="searchable-movie-reviews">
                <h3>Search for Reviews</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchTerm} onChange={this.updateSearchTerm} />
                    <input type="submit" />
                </form>
                <h5>Results</h5>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }
}

export default SearchableMovieReviewsContainer;
