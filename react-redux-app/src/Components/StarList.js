import React from 'react';
import StarCard from './StarCard';
import { connect } from 'react-redux';
import { getData } from '../Actions/index';
import './Style.css';

 const StarList = ({ isFetching, data, error, getData }) => {
  if (isFetching) {
    return <h3>Fetching Stars now ... </h3>; 
  }else if(error) {
    return <h3>{error}</h3>;
  } else {
    return <div>
      
      <button onClick={getData}> Get Data</button>

      {data.map((item, index) =>
     
        <div className="star-card">
          <StarCard id={index}
            name={item.name}
            height={item.height}
            mass={item.mass}
            gender={item.gender}
            birth_year={item.birth_year}
            homeworld={item.homeworld} />
          </div>)}
        
        </div>
  }
 }

 const mapStateToProps = (state) => {
  return {
    data: state.data,
    error: state.error,
    isFetching: state.isFetching
  }
}

// const mapDispatchToProps= {
//     getData  
// }

export default connect(mapStateToProps, { getData })(StarList);
    

