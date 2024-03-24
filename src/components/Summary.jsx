// Summary.jsx
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Summary = ({ totalExpenses, totalConverted }) => {
  return (
    <div className="border-2 border-gray-800 opacity-95 bg-gradient-to-r from-gray-600 via-gray-900 to-blue-900 p-4 rounded-lg mx-auto my-8 max-w-lg text-white">
      <h2 className="text-xl mb-4">Resumo dos Dados</h2>
      <p className="mb-2">Total de Despesas: {totalExpenses.toFixed(2)}</p>
      <p>Total Convertido: {totalConverted.toFixed(2)}</p>
    </div>
  );
};

Summary.propTypes = {
  totalExpenses: PropTypes.number.isRequired,
  totalConverted: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  totalExpenses: state.wallet.expenses.reduce((acc, expense) => acc + parseFloat(expense.value), 0),
  totalConverted: state.wallet.expenses.reduce((acc, expense) => {
    const exchangeRate = expense.exchangeRates?.[expense.currency]?.ask ?? 0;
    return acc + parseFloat(expense.value) * parseFloat(exchangeRate);
  }, 0),
});

export default connect(mapStateToProps)(Summary);
