import React from 'react';
import StarCard from './StarCard';
import { connect } from 'react-redux';
import { getData } from '../Actions/index';

 const StarList = (isFetching, data, error, getData) => {
  if (isFetching) {
    return (
      <>
    <h3>Fetching Stars now ... </h3>
    <button onClick={() => getData()}></button>
      </>
    )
    
  }else if(error) {
    return <h3>{error}</h3>;
  } else {
    return (
    <>
      {/* <button onClick={() => getData()}></button> */}
      <div>
        <h2>Stars: {data}</h2>

  {data.map((item, index) =>
    <StarCard id={index}
        name={item.name}
        height={item.height}
        mass={item.mass}
        gender={item.gender}
        birth_year={item.birth_year}
        homeworld={item.homeworld}
        gender={item.gender} />)}
    </div>
    </>
  )
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
    

