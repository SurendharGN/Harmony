import { Link } from "react-router-dom";
// import { useEffect } from "react";


export const Navbar = () => {
 
  return(
    <div>
      <div id="women">
        <Link className="womens-link" to="/shop/saree">Saree</Link>
        <Link className="womens-link" to="/shop/lehengas">Lehengas</Link>
        <Link className="womens-link" to="/shop/salwarKameez">Salwar kameez</Link>
        <Link className="womens-link" to="/shop/ghagraCholi">Ghagra choli</Link>
      </div>

      <div id="men">
        <Link className="mens-link" to="/shop/sherwani">Sherwani</Link>
        <Link className="mens-link" to="/shop/kurtha">Kurta</Link>
        
      </div>
    </div>
  )
}