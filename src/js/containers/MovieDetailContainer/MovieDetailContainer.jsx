import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
// import {  useParams } from 'react-router';
import { getMovieDetails } from './MovieDetailContainerActions';

export default class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { 
    const {dispatch} = this.props;
    let id = this.props.match.params.id;
    dispatch(getMovieDetails(id));
}

  render() {
    const {movieDetails} = this.props;
    console.log(movieDetails);
 
    return (
      <div>
        <Header />
        {/* <Movie /> */}
        <div className='card'>
          <div className='card-header text-white bg-primary mb-3'>Movie Details</div>
          <div className='card-body'>
            <Link to="/" className="pull-left btn btn-primary">Go Back</Link>

            <p className="text-center text-success font-weight-bold">{movieDetails.Title}</p>
            <p className="text-center text-success font-weight-bold">{movieDetails.Year}</p>
            <p className="text-center text-success font-weight-bold">{movieDetails.Runtime}</p>
            <p className="text-center text-success font-weight-bold">{movieDetails.Genre}</p>
            <p className="text-center text-success font-weight-bold">{movieDetails.Plot}</p>
            <p className="text-center text-success font-weight-bold">{movieDetails.Awards}</p>
            <p className="text-center text-success font-weight-bold">{movieDetails.MetaScore}</p>
            <p className="text-center text-success font-weight-bold">{movieDetails.imdbRating}</p>
          </div>
        </div>
      </div>
    )
  }
}