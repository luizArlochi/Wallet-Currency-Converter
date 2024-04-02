import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Importe o Provider do Redux
import store from './redux/store.js'; // Importe o armazenamento Redux
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Envolve o App com o Provider e passe o armazenamento Redux */}
      <App />
    </Provider>
  </React.StrictMode>
);
