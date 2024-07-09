import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToCarts } from "../redux/actions/productActions";
import { Link } from "react-router-dom";


const CartDetails = () => {
  const data = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    data.forEach((product) => {
      totalPrice += product.price;
    });
    return totalPrice.toFixed(2); // Ensure total price is rounded to 2 decimal places
  };

  const productDelete = (productId) => {
    dispatch(deleteToCarts(productId));
  };

  return (
    <div className="cart-details-container">
      <div className="cart-items">
        {data.map((product, index) => (
          <div className="cart-item" key={index}>
            <img src={product.image} alt="Product" />
            <div className="item-info">
              <h3>{product.category}</h3>
              <p>Price:-${product.price.toFixed(2)}</p>
              <span  onClick={() => productDelete(index)} class="material-symbols-outlined">
delete
</span>
             
            </div>
          </div>
        ))}
      </div>
      <div className="total-cost">Total Cost: ${calculateTotalPrice()}</div>
      <Link to="/" className="back-to-list-btn">Back to List</Link>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default CartDetails;
