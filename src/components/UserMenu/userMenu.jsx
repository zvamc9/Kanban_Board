import React from 'react';
import arrow from './arrow.svg'
import userIcon from "./user-avatar.svg"
import "./userMenu.css"
import { useState } from 'react'

function UserMenu() {
    const [open, setOpen] = useState(false)
    return ( 
        <div className="userMenu">
            <div className="menu-trigger" onClick={() => {setOpen(!open)}}>
                <img className="user-avatar" src={userIcon} alt="userIcon"></img>
                <img src={arrow} alt="arrow" className={`user-arrow ${open? 'up' : 'down'}`}></img>
            </div>
            <DropDownMenu className={`dropdown-full-menu ${open? 'active' : 'inactive'}`}/>
        </div>
     );
}

function DropDownMenu(props) {
    return ( 
        <div className={props.className}>
            <div className='dropdown-square'></div>
            <nav className='dropdown-menu'>
                <ul>
                    <DropDownItem text={"Profile"}/>
                    <DropDownItem text={"Log out"}/>
                </ul>
            </nav>
        </div>
     );
}


function DropDownItem(props) {
    return ( 
        <li className='dropdown-item'>
            <a href="##">{props.text}</a>
        </li>
     );
}


export default UserMenu;