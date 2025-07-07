# 🛒 React E‑Commerce Web App

An advanced single‑page store built with **React 18**, **Redux Toolkit**, **React Query**, and the free [FakeStore API](https://fakestoreapi.com/).  
Ideal for learners who want hands‑on practice with modern React tooling, asynchronous data fetching, and state management patterns.

---

## ✨ Live Demo

> **Optional** – add your Vercel / Netlify link here

---

## 📸 Preview

![Catalog screenshot](docs/catalog.png)  
![Cart screenshot](docs/cart.png)

*(Screens are mockups—update with real screenshots after deploying.)*

---

## 🎯 Features & Tech

| Stack | Description |
|-------|-------------|
| **React 18** | Functional components + hooks |
| **Redux Toolkit** | Store & slices for the shopping cart |
| **React Query** | Cached, auto‑refreshed product/category requests |
| **sessionStorage** | Persists cart between page refreshes |
| **FakeStore API** | Mock data source for products & categories |
| **Vite 5** | Lightning‑fast dev server & build |
| **Tailwind CSS** (optional) | Utility‑first styling |

---

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/YOUR_USERNAME/react‑ecommerce‑advanced.git
cd react‑ecommerce‑advanced
npm install
```

### 2. Environment Variables

Create `.env` in the project root (no secrets required today, but keeps things flexible):

```
VITE_API_BASE=https://fakestoreapi.com
```

### 3. Run Dev Server

```bash
npm run dev      # http://localhost:5173
```

The browser refreshes on save thanks to Vite HMR.

### 4. Run Tests  *(coming soon)*

```bash
npm test
```

---

## 🗂️ Project Structure

```
src/
├── api/                    # React‑Query hooks
│   ├── useCategories.js
│   └── useProducts.js
├── app/                    # Redux store
│   ├── store.js
│   └── cartSlice.js
├── components/
│   ├── CategorySelect.jsx
│   ├── ProductCard.jsx
│   ├── CartItem.jsx
│   └── …others
├── pages/
│   ├── Home.jsx            # catalog + cart badge
│   └── Cart.jsx            # full cart view & checkout
├── hooks/                  # custom hooks
│   └── useSessionCart.js
└── main.jsx                # entry
```

---

## 🛒 Core Concepts Explained

### 1. React Query for Data Fetching

```js
// src/api/useProducts.js
export const useProducts = (category) =>
  useQuery(['products', category], () =>
    axios.get(`${base}/products${category ? `/category/${category}` : ''}`)
  );
```

* **Caching & re‑validation** out of the box  
* Background refetch on category change  
* Automatic loading & error states

### 2. Redux Toolkit Cart Slice

```js
// src/app/cartSlice.js
const cartSlice = createSlice({
  name: 'cart',
  initialState: loadFromSession() ?? [],
  reducers: {
    addItem(state, action) { … },
    removeItem(state, action) { … },
    clearCart: () => []
  }
});
```

* Pure reducers for _add_, _remove_, _clear_  
* Persist to **sessionStorage** via `subscribe()` middleware

### 3. Session Persistence

```js
store.subscribe(() => {
  sessionStorage.setItem('cart', JSON.stringify(store.getState().cart));
});
```

### 4. Checkout Simulation

On **Checkout** click:

* Dispatch `clearCart()`  
* Purge `sessionStorage`  
* Show a success toast: “Thanks for shopping!” 🎉

---

## 👩‍💻 Contributing

1. Fork repo & create feature branch  
2. `npm run lint` before committing  
3. Submit a PR — all PRs run ESLint & unit tests via GitHub Actions
