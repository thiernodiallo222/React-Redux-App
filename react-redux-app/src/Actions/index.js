import React from 'react';
import axios from 'axios';
export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const getData = () => dispatch => {
  
  // initially send the action FETCHING_QUOTE_START so that we
  // get our state updated to support a fetch
  dispatch({
    type: FETCHING_START,
    payload: false
  });

  axios
      // .get("https://api.github.com/users/thiernodiallo222/followers")
    .get('https://swapi.co/api/people/')
    //  .get("https://api.kanye.rest")
      
    .then(res => {
      console.log("res", res.data.results);
      // send the action FETCHING_QUOTE_SUCCESS and update state
      // to show the fetched data
      dispatch({ type: FETCHING_SUCCESS, payload: res.data.results });
    })

    .catch(err => {
      console.log('err', err);
      // send the action FETCHING_QUOTE_FAILURE and update state
      // to show the error message
      dispatch({
        type: FETCHING_FAILURE,
        payload: 'ERROR TO FETCH DATA'
        });
    });
};

// useEffect(() => {
    

//     axios
//         .get(`https://swapi.co/api/people/`) // using API url to fetch stars
       
//          .then(response => {
//        console.log(response.data.results); // displaying stars to check its structure
//              setStars(response.data.results); // set the state of the photo
//          })
//             .catch(err => {
//                 console.log(`Sorry, stars was not returned !`, err);
//             });      
// }, []);