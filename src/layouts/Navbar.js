import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className=' text-xl flex justify-center py-5 bg-rose-400 text-white font-bold'>
            <Link className=' mr-8' to='/'>Home</Link>
            <Link className=' mr-8' to='/show'>Show-Book</Link>
            <Link className=' mr-8' to='/add'>Add-Book</Link>
        </nav>
    );
};

export default Navbar;