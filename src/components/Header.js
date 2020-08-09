import React from 'react';
import pokemonLogo from '../assets/pokemon-logo.png';

const Header = () => {
    return (<div className="absolute new-card flex flex-row justify-center items-center text-white text-xl md:text-3xl font-extrabold uppercase tracking-widest top-0 mt-2 md:mt-8">
        Who's That <img className="logo-animation w-32 p-1 -mt-2" src={pokemonLogo} alt="Pokemon logo" /> ?
    </div>)
}

export default Header;