import React from 'react'
import './Style.css';

  const StarCard =(props) => {
      return  <div >

          
       <h3> Name: {props.name} </h3>
      
       <p>Height: {props.height} Feet </p>

       <p> Weight: {props.mass} Lbs </p>

       <p> Year of birth: {props.birth_year}</p>

       <p>Gender: {props.gender}</p>

       <p>Home world: {props.homeworld} </p>
            
            
        </div>
    
}
    
     

export default StarCard;