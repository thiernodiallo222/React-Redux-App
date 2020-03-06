import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider, connect } from 'react-redux';
import { getData } from './Actions';
import { StarList } from './Components/StarList';
import { initialState } from './Actions/index';

const  App =(props)=> {
  return (
    <div className="App">
      <StarList getData={props.getData} data={props.data} isFetching={props.isFetching} error={props.error}/>
      
      
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.data,
    error: state.error,
    isFetching: state.isFetching
  }
}

const mapDispatchToProps = () => {
    getData
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


