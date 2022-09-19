import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-neutral text-neutral-content flex justify-between items-center">
                <div>
                    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className='ml-4'>
                    <a className='ml-4' href="">Home</a>
                    <a className='ml-4' href="">Home</a>
                    <a className='ml-4' href="">Home</a>
                    <a className='ml-4' href="">Home</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;