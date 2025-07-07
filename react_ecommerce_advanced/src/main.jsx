import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './pages/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const qc = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={qc}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
