import React from 'react';
import './header.css';
import UserMenu from '../UserMenu/userMenu'

function Header() {
    return ( 
        <header>
        <h1 className='header__title'>Awesome Kanban Board</h1>
       <UserMenu />
        </header>
     );
}

export default Header;