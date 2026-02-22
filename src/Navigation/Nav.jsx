import React from 'react'
import { AiOutlineShoppingCart, AiFillHeart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css"
import "../index.css"
export const Nav = () => {
    return (
        <nav>
            <div className="nav-container">
                <input type="text" className='search-input' placeholder='enter the values' />
            </div>
            <div className="profile-container">
                <a href="#">
                    <AiFillHeart className='nav-incons' />
                </a>
                <a href="#">
                    <AiOutlineShoppingCart className='nav-incons' />
                </a>
                <a href="#">
                    <AiOutlineUserAdd className='nav-incons' />
                </a>
            </div>
        </nav>
    )
}
