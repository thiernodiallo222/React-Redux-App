import React from 'react'

export const StarCard =(props) => {
    return (
        <div>
            
        </div>
    )
}



export default function StarwarElement(props){
    return (
        <>

            <Title>
                 {props.name}
            </Title>
      
            <p>
                Height: {props.height} Feet
            </p>

             <p>
                Weight: {props.mass} Lbs
            </p>

            <p>
              Year of birth: {props.birth_year}
            </p>

             <p>
               Gender: {props.gender}
            </p>

             <p>
               Home world: {props.homeworld}
            </p>

             <p>
               Films: {props.films}
            </p>
               
        </>
    )
}