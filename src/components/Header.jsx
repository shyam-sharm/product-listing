import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from '../Context/Index';

const Header = () => {
    const {cart} = useContext(MainContext);
    return (
        <div className='shadow-lg p-3 sticky top-0 bg-white z-[9999999999]'>
            <nav className='mx-auto max-w-[1200px]'>
               <ul className='flex gap-6 justify-end'>
                <li>
                    <Link to={"/"}> 
                    Home
                    </Link>
                </li>

                <li>
                    <Link to={"/Cart"}> 
                    Cart ({cart.length})
                    </Link>
                </li>
               </ul>
            </nav>
        </div>
    );
}

export default Header;
