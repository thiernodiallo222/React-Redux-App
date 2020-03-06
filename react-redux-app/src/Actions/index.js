export const FECTCHING_START = 'FECTCH_START';
export const FECTCHING_SUCCESS = 'FECTCH_SUCCESS';
export const FECTCHING_FAIL = 'FECTCH_FAIL';

export const initialSate = {
    data: [],
  error: '',
  isFetching: false
};

export const getData = () => fire => {
  // initially send the action FETCHING_QUOTE_START so that we
  // get our state updated to support a fetch
  fire({ type: FETCHING_START });

  axios
      .get(`https://swapi.co/api/people/`)
      
    .then(res => {
      console.log("res", res);
      // send the action FETCHING_QUOTE_SUCCESS and update state
      // to show the fetched data
      fire({ type: FETCHING_SUCCESS, payload: res.data.results });
    })
    .catch(err => {
      console.log("err", err);
      // send the action FETCHING_QUOTE_FAILURE and update state
      // to show the error message
      fire({
        type: FETCHING_FAIL,
        payload: `${err.response.message} with response code ${
          err.response.code
        }`
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