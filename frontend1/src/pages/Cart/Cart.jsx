import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa"; // Import Font Awesome icon

const Cart = () => {
  const { cartItems, foodList, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      {getTotalCartAmount() === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            <div className="cart-items-title">
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br />
            <hr />
            {foodList.map((item, index) => {
              if (cartItems[item.foodId] > 0) {
                return (
                  <div key={index}>
                    <div className="cart-items-title cart-items-item">
                      <img src={item.foodImage} alt="" />
                      <p>{item.foodName}</p>
                      <p>{item.foodPrice}</p>
                      <p>{cartItems[item.foodId]}</p>
                      <p>{item.foodPrice * cartItems[item.foodId]}</p>
                      <p
                        onClick={() => removeFromCart(item.foodId)}
                        className="cross"
                      >
                        <FaTrashAlt />
                      </p>
                    </div>
                    <hr />
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Total</h2>
              <div>
                <div className="cart-total-details">
                  <p>SubTotal</p>
                  <p>₹{getTotalCartAmount()}</p>
                </div>
                <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p>₹{getTotalCartAmount() === 0 ? 0 : 50}</p>
                </div>
                <div className="cart-total-details">
                  <b>Grand Total</b>
                  <b>
                    ₹
                    {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 50}
                  </b>
                </div>
              </div>
              <button onClick={() => navigate("/user-dashboard/order")}>
                PROCEED TO CHECKOUT
              </button>
            </div>
            <div className="cart-promocode">
              <div>
                <p>If you have any promocode, Enter</p>
                <div className="cart-promocode-input">
                  <input type="text" placeholder="Promo Code" />
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
