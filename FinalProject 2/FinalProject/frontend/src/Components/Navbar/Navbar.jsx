import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cart_icon from '../Assets/cart_icon.png';
import gear_kart_logo from '../Assets/Gear-Cart-Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdownToggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    };

    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        // Show toast notification for successful logout
        toast.success('Successfully logged out', {
            onClose: () => {
                // Reload the page after the toast is closed
                window.location.reload();
            }
        });
    };

    const handleCartClick = () => {
        if (localStorage.getItem('auth-token')) {
            // Navigate to cart page if user is logged in
            window.location.replace('/cart');
        } else {
            // Redirect to home page if user is not logged in
            toast.info('Login to access cart');
            window.location.replace('/');
            toast.info('Login to access cart');
        }
    };

    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
            <div className="container">
                <Link to='/' className='navbar-brand'>
                    <img src={gear_kart_logo} alt='GearKart' style={{ width: '120px' }} />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to='/' className='nav-link'>Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/switchgears' className='nav-link'>Switch Gears</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/motors' className='nav-link'>Motors</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/instruments' className='nav-link'>Instruments</Link>
                        </li>
                        <li className="nav-item">
                            {localStorage.getItem('auth-token') ? (
                                <button className='nav-link' onClick={handleLogout}>Logout</button>
                            ) : (
                                <Link to='/login' className='nav-link'>Signin</Link>
                            )}
                        </li>
                        <li className="nav-item">
                            <Link to='/cart' className='nav-link'>
                                <img src={cart_icon} alt='Cart' className='nav-cart-icon' onClick={handleCartClick} />
                                <div className='nav-cart-count'>{getTotalCartItems()}</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <ToastContainer />
        </nav>
    );
};

export default Navbar;



// import React, { useContext, useRef, useState } from 'react';
// import './Navbar.css';
// import { Link } from 'react-router-dom';
// import { ShopContext } from '../../Context/ShopContext';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import nav_dropdown from '../Assets/nav_dropdown.png';
// import cart_icon from '../Assets/cart_icon.png';
// import gear_kart_logo from '../Assets/Gear-Cart-Logo.png';

// export const Navbar = () => {
//     const [menu, setMenu] = useState('shop');
//     const { getTotalCartItems } = useContext(ShopContext);
//     const menuRef = useRef();

//     const dropdownToggle = (e) => {
//         menuRef.current.classList.toggle('nav-menu-visible');
//         e.target.classList.toggle('open');
//     };

//     const handleLogout = () => {
//         localStorage.removeItem('auth-token');
//         // Show toast notification for successful logout
//         toast.success('Successfully logged out', {
//             onClose: () => {
//                 // Reload the page after the toast is closed
//                 window.location.reload();
//             }
//         });
//     };

//     const handleCartClick = () => {
//         if (localStorage.getItem('auth-token')) {
//             // Navigate to cart page if user is logged in
//             window.location.replace('/cart');
//         } else {
//             // Display toast message prompting user to login
//             toast.info('Login to access cart');
//         }
//     };

//     return (
//         <div className='navbar'>
//             <div className='nav-logo' style={{ marginRight: '50px' }}>
//                 <Link to='/' style={{ textDecoration: 'none' }}>
//                     <img src={gear_kart_logo} alt='Gear Kart Logo' style={{ width: '270px', height: '60' }} />
//                 </Link>
//             </div>
//             <img className='nav-dropdown' onClick={dropdownToggle} src={nav_dropdown} alt='Menu' />
//             <ul ref={menuRef} className='nav-menu'>
//                 <li onClick={() => setMenu('shop')}>
//                     <Link to='/' style={{ textDecoration: 'none' }}>
//                         Shop
//                     </Link>
//                     {menu === 'shop' ? <hr /> : null}
//                 </li>
//                 <li onClick={() => setMenu('switchgears')}>
//                     <Link to='/switchgears' style={{ textDecoration: 'none' }}>
//                         Switch Gears
//                     </Link>
//                     {menu === 'switchgears' ? <hr /> : null}
//                 </li>
//                 <li onClick={() => setMenu('motors')}>
//                     <Link to='/motors' style={{ textDecoration: 'none' }}>
//                         Motors
//                     </Link>
//                     {menu === 'motors' ? <hr /> : null}
//                 </li>
//                 <li onClick={() => setMenu('instruments')}>
//                     <Link to='/instruments' style={{ textDecoration: 'none' }}>
//                         Instruments
//                     </Link>
//                     {menu === 'instruments' ? <hr /> : null}
//                 </li>
//             </ul>
//             <div className='nav-login-cart'>
//                 {localStorage.getItem('auth-token') ? (
//                     <button onClick={handleLogout}>Logout</button>
//                 ) : (
//                     <Link to='/login'>
//                         <button>Login</button>
//                     </Link>
//                 )}
//                 <img onClick={handleCartClick} src={cart_icon} alt='Cart' className='nav-cart-icon' />
//                 <div className='nav-cart-count'>{getTotalCartItems()}</div>
//             </div>
//             <ToastContainer />
//         </div>
//     );
// };

// export default Navbar;
