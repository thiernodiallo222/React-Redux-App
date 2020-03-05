import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider, connect } from 'react-redux';

const  App =()=> {
  return (
    <div className="App">
      
    </div>
  );
}
const mapStateToProps = (item) => {
  {
    //initial state object propertties to be set here.
  }
}

const mapDispatchToProps = () => {
  {
    fetchDate
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
