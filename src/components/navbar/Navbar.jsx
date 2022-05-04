import React from 'react'
import './Navbar.css';

const Navbar = () =>  {
    return (
        <div className="navbar">
            <div className="navcontainer">
                <span className='logo'>lamabooking</span>
                <div className="navItem">
                    <button className='navButton'>register</button>
                    <button className='navButton'>login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar