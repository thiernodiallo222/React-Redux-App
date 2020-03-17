import React from 'react'

  const StarCard =(props) => {
    return (
        <div>
       <h2> {props.name} </h2>
      
       <p>Height: {props.height} Feet </p>

       <p> Weight: {props.mass} Lbs </p>

       <p> Year of birth: {props.birth_year}</p>

       <p>Gender: {props.gender}</p>

       <p>Home world: {props.homeworld} </p>
            
       <p>Films: {props.films} </p>
            
        </div>
    )
}

export default StarCard;