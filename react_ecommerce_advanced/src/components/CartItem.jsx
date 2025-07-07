import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../store/cartSlice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="card" style={{display:'flex',gap:'1rem',alignItems:'center'}}>
      <img src={item.image} alt={item.title} style={{width:60, height:60, objectFit:'contain'}}/>
      <div style={{flexGrow:1}}>
        <h4>{item.title}</h4>
        <p>Qty: {item.count}</p>
        <p>${(item.price * item.count).toFixed(2)}</p>
      </div>
      <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
    </div>
  );
}
