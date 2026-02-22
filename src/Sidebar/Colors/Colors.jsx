import React from 'react'
import "./Color.css"
export const Colors = () => {
    return (
        <div className='ml'>
            <h2 className="sidebar-title-price-tile">
                Colors
            </h2>
            <label className='sidebar-lable-container'>
                <input type="radio" name="test2" />
                <span className="checkmark"></span>All
            </label>
            <label className='sidebar-lable-container'>
                <input type="radio" name="test2" />
                <span className="checkmark"></span>Red
            </label>
            <label className='sidebar-lable-container'>
                <input type="radio" name="test2" />
                <span className="checkmark"></span>White
            </label>
            <label className='sidebar-lable-container'>
                <input type="radio" name="test2" />
                <span className="checkmark"></span>Gray
            </label>
        </div>
    )
}
