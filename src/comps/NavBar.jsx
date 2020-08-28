import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className='nav'>
            <h3>React Anki</h3>
            <div>
                <Link className='links' to='/decks'>Decks</Link>
                <Link className='links' to='/'>Add</Link>
                <Link className='links' to='/'>Search</Link>
            </div>
        </div>
    )
}
