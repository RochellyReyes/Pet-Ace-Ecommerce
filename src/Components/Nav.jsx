import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import "../styling/nav.css";

const Nav = () => {
  let HomeP, ProductsP, ContactP;
  const currentLocation = useLocation();

// console.log(useLocation());

  if (currentLocation.pathname === "/") {
      HomeP = 'active';
  } else if (currentLocation.pathname === "/products") {
      ProductsP = 'active';
  } else if (currentLocation.pathname === "/contact") {
      ContactP = 'active';
  }

  return (
    <div>
        <nav className="Nav">
            <ul>
                <li><Link 
                  className={HomeP}
                  to="/">
                    Home
                </Link></li>
                <li><Link 
                  className={ProductsP}
                  to="/products">
                    Products
                </Link></li>
                <li><Link 
                  className={ContactP}                     
                  to="/contact">
                    Contact
                </Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav;


