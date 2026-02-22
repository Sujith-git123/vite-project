import React from 'react'
import "./Sidebar.css"
import { AiFillShop } from 'react-icons/ai'
import { Category } from './Category/Category'
import { Price } from './Price/Price'
import { Colors } from './Colors/Colors'
export const Sidebar = () => {
    return (
        <>
            <section className="sidebar">
                <div className="logo-container">
                    <p><AiFillShop />Shop</p>
                </div>
                <Category />
                <Price />
                <Colors />
            </section>
        </>
    )
}
