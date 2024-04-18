import React, { useState } from 'react';
import './Navbar.css';
import navProfile from '../../assets/nav-profile.png';
import gear_kart_logo from '../../assets/Gear-Cart-Logo.png';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleViewAsUser = () => {
        window.location.href = 'http://localhost:3001/';
    };

    return (
        <div className='navbar' style={{ backgroundColor: '#404040' }}>
            <img src={gear_kart_logo} alt="" className="nav-logo" style={{ width: '200px', height: '60px' }} />   
            <div className='nav-profile' onClick={toggleDropdown}>
                <img src={navProfile} alt="" style={{ width: '60px', height: '60px' }} />
                {dropdownOpen && (
                    <div className='dropdown'>
                        <button className="dropdown-btn" onClick={handleViewAsUser}>View as User</button>
                    </div>
                )}
            </div>         
        </div>
    );
};

export default Navbar;
