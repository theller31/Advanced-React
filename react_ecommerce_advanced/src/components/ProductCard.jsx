import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={product.image} alt={product.title} style={{ maxHeight: 150, objectFit: 'contain'}}/>
      <h3>{product.title}</h3>
      <p><strong>${product.price}</strong></p>
      <p style={{fontSize:'.9rem'}}>{product.category}</p>
      <button onClick={() => dispatch(addItem(product))}>Add to Cart</button>
    </div>
  );
}
