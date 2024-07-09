import React from "react";
import { useSelector } from "react-redux";
// import ProductComponent from "./ProductComponent";
import { Link } from "react-router-dom";
function Header(props) {
    const data=useSelector((state)=>state.cart.cart)
    const TotalProducts = () => {
        
        return data.length;
      };
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link to="/"><h3>MY E-SHOP</h3></Link>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
          
          />
          <button className="search-button">Search</button>
        </div>
        <Link to="/cart"><span className="material-symbols-outlined nav">shopping_cart<sup>({TotalProducts()})</sup></span></Link>
       
      </div>
      
    </div>
    
  );
}

export default Header;
