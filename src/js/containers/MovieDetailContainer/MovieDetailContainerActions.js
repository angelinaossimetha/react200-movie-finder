import axios from 'axios';
// const axios = require('axios');

export function getMovieDetails(id) {
    let a = axios.get(`/movie/${id}`)
    .then(res => {
      return res;
    });
    
    return {
        type: 'GET_MOVIE_DETAILS',
        // payload: axios.get(`/movie/${id}`) 
        payload: a
    };
}
