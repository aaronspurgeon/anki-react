import React from 'react';
import { Link } from 'react-router-dom';

export default function Decks({ data }) {



    return (
        <div className='decks'>
            {data.map((deck, index) => (
                <Link className='items' to={`/cards/${index}`} key={index}>{deck.name}</Link>
            ))}
        </div>
    )
}
