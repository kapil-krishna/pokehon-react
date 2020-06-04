import React from 'react';

const Pokemon = (props) => (
    <div className="pokemon-wrapper">
        <div>{props.data.name}</div>
        <img src={props.data.imageURL}></img>
    </div>  
)

export default Pokemon;