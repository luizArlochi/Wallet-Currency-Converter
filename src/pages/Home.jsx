import React from 'react';
import Sidebar from '../components/Sidebar';
import Summary from '../components/Summary';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="min-h-screen flex bg-pattern bg-cover bg-center backdrop-filter backdrop-blur-md">
      <div className="w-sidebar">
        <Sidebar />
      </div>
      <div className="flex-1 m-4">
        <Header />
        <Summary />
      </div>
    </div>
  );
};

export default Home;
