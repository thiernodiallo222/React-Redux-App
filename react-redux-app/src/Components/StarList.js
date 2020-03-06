import React, { useEffect } from 'react';
import { StarCard } from './StarCard';
import { getData } from '../Actions/index';

const star = ({ getData, data, isFetching, error }) => {
  if (isFetching) {
    return <h2>Fetching Stars now :)</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h2>Stars: {data}</h2>
      <button onClick={getData}>Get Stars</button>
    </div>
  );
};


export const StarList =(props) => {
    return (
        <div>
            {props.}
            
        </div>
    )
}

