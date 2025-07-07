import React, { useState } from 'react';
import { useProducts } from '../api/useProducts';
import ProductCard from '../components/ProductCard';
import CategorySelect from '../components/CategorySelect';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Home() {
  const [category, setCategory] = useState('');
  const { data: products, isLoading, error } = useProducts(category);
  const cartCount = useSelector(state =>
    state.cart.reduce((sum, p) => sum + p.count, 0)
  );

  return (
    <>
      <header>
        <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h1>React Store</h1>
          <Link to="/cart">🛒 Cart ({cartCount})</Link>
        </div>
      </header>

      <div className="container">
        <CategorySelect value={category} onChange={setCategory} />
        <br />
        {isLoading && <p>Loading products…</p>}
        {error && <p className="error">Failed to load products</p>}
        {products && (
          <div className="grid">
            {products.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </>
  );
}
