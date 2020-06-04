import React, { useState, useEffect } from 'react';
import { asyncJsonFetch } from '../../helpers/asyncJsonFetcher';
import Pokemon from '../../components/Pokemon/PokemonModel';

const Play = () => {

    const [maxPokemon, setMaxPokemon] = useState(800);
    const [firstPkmn, setFirstPkmn ] = useState(null);
    const [secondPkmn, setSecondPkmn ] = useState(null);
    
    //find number of pokemon in DB

    useEffect(() => {
            asyncJsonFetch("noOfPokemon")
            .then(json => setMaxPokemon(json));
        },
        []
    );

    // generate random IDs

    function generateRandomId(maxPokemon) {
        return Math.floor(Math.random()*maxPokemon);
    }
    

     const firstPkmnId = generateRandomId(maxPokemon);
        const secondPkmnId = generateRandomId(maxPokemon);

    
    // while (firstPkmnId == secondPkmnId) {
    //     secondPkmnId = generateRandomId(maxPokemon);
    // }

    //fetch first pokemon

    useEffect(
        () => {
            asyncJsonFetch(firstPkmnId)
            .then(json => setFirstPkmn(json));
        },
        []
    );

    //fetch second pokemon

    useEffect(
        () => {
            asyncJsonFetch(secondPkmnId)
            .then(json => setSecondPkmn(json));
        },
        []
    );

    if (firstPkmn === null || secondPkmn === null) {
        return (
        <h1>LOADING</h1>
        )
    } else {
        return (
            <div className="container" id="welcome-container">
                <h1>Pokemon battle! Which Pokemon looks cooler?</h1>
                <div className="pokemon-container">
                    <Pokemon data={firstPkmn} />
                    <Pokemon data={secondPkmn} />
                </div>
            </div>
        )
    };
}

export default Play;