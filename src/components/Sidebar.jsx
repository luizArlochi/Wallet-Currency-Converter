// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import CoinCanvas from './canvas/coin';

const Sidebar = () => {
  return (
    <div className="sidebar bg-secondary border-2 border-gray-800 m-3 rounded-[15px] bg-opacity-95">

      <CoinCanvas />
      <ul className="flex flex-col p-3">
        <li className="mb-4">
          <Link to="/home" className="text-black flex justify-center">
            <img
              src="src/assets/home.png"
              alt="home-icon"
              className="w-12 h-12"
            />
          </Link>
        </li>
        <li>
          <Link to="/wallet" className="text-black flex justify-center">
            <img
              src="src/assets/wallet.png"
              alt="wallet-icon"
              className="w-12 h-12 m-3"
            />
          </Link>
          <Link to="/" className="text-black flex justify-center">
            <img
              src="src/assets/logout.png"
              alt="wallet-icon"
              className="w-12 h-12 m-3"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
