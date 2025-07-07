import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';
import { clearCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((sum, p) => sum + p.count, 0);
  const totalPrice = cart.reduce((sum, p) => sum + p.count * p.price, 0);

  function handleCheckout() {
    if (!cart.length) return;
    dispatch(clearCart());
    sessionStorage.removeItem('cart');
    alert('Thanks for your purchase! 🎉');
  }

  return (
    <>
      <header>
        <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h1>Your Cart</h1>
          <Link to="/">← Back to Store</Link>
        </div>
      </header>

      <div className="container">
        {cart.length === 0 && <p>Your cart is empty.</p>}
        {cart.map(i => <CartItem key={i.id} item={i} />)}

        <hr />

        <h3>Total Items: {totalItems}</h3>
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>

        <button onClick={handleCheckout} disabled={!cart.length}>Checkout</button>
      </div>
    </>
  );
}
