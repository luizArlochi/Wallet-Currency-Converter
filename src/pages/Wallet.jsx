import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';
import Sidebar from '../components/Sidebar';

class Wallet extends React.Component {
  render() {
    return (
      <div className="flex min-h-screen bg-pattern">
        <div className="w-sidebar">
          <Sidebar />
        </div>
        <div className="m-4">
          <Header />
          <WalletForm />
          <Table />
        </div>
      </div>
    );
  }
}

export default Wallet;
