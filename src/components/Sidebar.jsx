// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar bg-green-800 p-7 m-3 rounded-[10px]">
      <ul className="flex flex-col p-3">
        <li className="mb-4">
          <Link to="/home" className="text-white">Home</Link>
        </li>
        <li className="mb-4">
          <Link to="/home" className="text-white">Home</Link>
        </li>
        <li className="mb-4">
          <Link to="/home" className="text-white">Home</Link>
        </li>
        <li className="mb-4">
          <Link to="/home" className="text-white">Home</Link>
        </li>
        <li className="mb-4">
          <Link to="/home" className="text-white">Home</Link>
        </li>
        <li className="mb-4">
          <Link to="/home" className="text-white">Home</Link>
        </li>
        <li>
          <Link to="/wallet" className="text-white">Wallet</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
