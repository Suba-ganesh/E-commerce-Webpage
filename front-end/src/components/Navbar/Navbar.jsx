import React, { useContext, useRef, useState } from "react";
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import nav_dropdown from '../Assets/nav_dropdown.png';

const Navbar =() => {

      const [menu,setMenu] = useState("shop");
      const {getTotalCartItems} = useContext(ShopContext);
      const menuRef = useRef();

      const dropdown_toggle = (e) => {
            menuRef.current.classList.toggle('nav-menu-visible');
            e.target.classList.toggle('open');
      }

return (
    <div className="navbar">
         <div className="nav-logo">
            <img className="nav-logo-img"  src={logo} alt=""></img>
            <p>Big Shopper</p>
         </div>
         <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
         <ul ref={menuRef} className="nav-menu">
            <li onClick={() => {setMenu("shop")}}><Link to='/' style={{textDecoration:'none'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("mens")}}><Link to='/mens' style={{textDecoration:'none'}}>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("womens")}}><Link to='/womens' style={{textDecoration:'none'}}>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("kids")}}><Link to='/kids' style={{textDecoration:'none'}}> Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login' style={{textDecoration:'none'}}><button>Log-In</button></Link>
                <Link to='/cart' style={{textDecoration:'none'}}><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            
            </div>
    </div>
)
}

export default Navbar;