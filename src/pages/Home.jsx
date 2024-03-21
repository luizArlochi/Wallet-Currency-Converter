import React from 'react';
import Sidebar from '../components/Sidebar';
import Summary from '../components/Summary';

const Home = () => {
  return (
    <div className="flex bg-gray-800">
      <Sidebar />
      <div className="flex-1">
      <h1 className="text-3xl font-bold text-blue-500 p-3 ">Home</h1>
        <Summary />
      </div>
    </div>
  );
};

export default Home;
