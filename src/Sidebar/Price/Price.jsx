import React from 'react'
import "./Price.css"
export const Price = () => {
    return (
        <div className='ml'>
            <h2 className="sidebar-title-price-tile">
                Price
            </h2>
            <label className='sidebar-lable-container'>
                <input type="radio" name="test2" />
                <span className="checkmark"></span>All
            </label>
            <label className='sidebar-lable-container'>
                <input type="radio" name="test2" />
                <span className="checkmark"></span>$0 - $50
            </label>
            <label className='sidebar-lable-container'>
                <input type="radio" name="test2" />
                <span className="checkmark"></span>$50 - $100
            </label>
            <label className='sidebar-lable-container'>
                <input type="radio" name="test2" />
                <span className="checkmark"></span>$100 - $500
            </label>
        </div>
    )
}
