import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

function Header() {
    return (
        <header className='header'>
            <nav className='navbar'>
                <ul className='navbar__item left__nav__list'>
                    <li className='nav__item'><a href="" className='nav__link'>Forum</a></li>
                    <li className='nav__item'><a href="" className='nav__link'>Categories</a></li>
                    <li className='nav__item'><a href="" className='nav__link'>Books</a></li>
                    <li className='nav__item'><a href="" className='nav__link'>Recipe Index</a></li>
                    <li className='nav__item'><a href="" className='nav__link'>Popular</a></li>
                </ul>

                <ul className='navbar__item right__nav__list'>
                    <li className='nav__item'><a href="#" className='nav__link'><AccountBoxIcon/> REGISTER</a></li>
                    <li className='nav__item'><a href="#" className='nav__link'><PersonIcon/> LOGIN</a></li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header
