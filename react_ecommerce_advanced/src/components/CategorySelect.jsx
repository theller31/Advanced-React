import React from 'react';
import { useCategories } from '../api/useCategories';

export default function CategorySelect({ value, onChange }) {
  const { data, isLoading, error } = useCategories();

  if (isLoading) return <p>Loading categories…</p>;
  if (error) return <p className="error">Failed to load categories</p>;

  return (
    <select value={value} onChange={e => onChange(e.target.value)}>
      <option value="">All categories</option>
      {data.map(c => (
        <option key={c} value={c}>{c}</option>
      ))}
    </select>
  );
}
