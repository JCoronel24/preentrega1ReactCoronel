import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
return (
    <nav className="navbar">
    <div className="navbar-brand">Mi Tienda</div>
    <ul className="navbar-categories">
        <li>Categoría 1</li>
        <li>Categoría 2</li>
        <li>Categoría 3</li>
    </ul>
    <CartWidget />
    </nav>
);
};

export default NavBar;

