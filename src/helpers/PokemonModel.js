import React from 'react';

export default function PokemonModel(props) {
    return (
        <div className="pokemon">
            <div className="pokemon-name">{props.data.name}</div>
            <div className="pokemon-image">{props.data.imageUrl}</div>
        </div>
    )
}