import React from 'react';
import logo from './../../assets/images/logo.png'

const Navbar = () => {
    return (

        <div class="navbar bg-neutral text-neutral-content flex justify-between items-center">
            <div>

                <img className='h-14 w-14' src={logo} alt="" />

            </div>
            <div className='ml-4 '>
                <a className='ml-4' href="">Home</a>
                <a className='ml-4' href="">Home</a>
                <a className='ml-4' href="">Home</a>
                <a className='ml-4' href="">Home</a>
            </div>
        </div>

    );
};

export default Navbar;