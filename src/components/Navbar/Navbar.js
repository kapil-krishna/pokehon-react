import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/play">PLAY</NavLink>
        <NavLink to="/leaderboard">LEADERBOARD</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
    </nav>
);

export default Navbar;

