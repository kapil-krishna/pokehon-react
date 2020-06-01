import React, { useState, useEffect } from 'react';
import asyncJsonFetcher from '../../helpers/asyncJsonFetcher';

function Play() {

    const [maxPokemon, setMaxPokemon] = useState(0);

    useEffect(
        () => {
            asyncJsonFetcher("noOfPokemon")
            .then(json => setMaxPokemon(json))
        },
        []
    );

    // var maxPokemon;
    // asyncJsonFetcher("noOfPokemon")
    // .then(data => maxPokemon = data)
    // .then(() => console.log(maxPokemon));


    //generate first random id

    //generate second random id

    //fetch first pokemon

    //fetch second pokemon

    //map to 

    return (
        <div className="container" id="welcome-container">
            <h1>How many Pokemon are in the database?</h1>
            <h2>{maxPokemon}</h2>
        </div>
    );
}

export default Play;