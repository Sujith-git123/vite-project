import React from 'react'
import "./Category.css"
export const Category = () => {
    return (
        <div>
            <h2 className="sidebar-title">Category</h2>
            <div>
                <label className='sidebar-lable-container'>
                    <input type="radio" name="test" />
                    <span className="checkmark"></span>All
                </label>
                <label className='sidebar-lable-container'>
                    <input type="radio" name="test" />
                    <span className="checkmark"></span>Sneakers
                </label>
                <label className='sidebar-lable-container'>
                    <input type="radio" name="test" />
                    <span className="checkmark"></span>Flats
                </label>
                <label className='sidebar-lable-container'>
                    <input type="radio" name="test" />
                    <span className="checkmark"></span>Sandals
                </label>
                <label className='sidebar-lable-container'>
                    <input type="radio" name="test" />
                    <span className="checkmark"></span>Heels
                </label>
            </div>
        </div>
    )
}
