import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { styles } from '../styles';

class Header extends Component {
  expensesOutput = () => {
    const { expenses } = this.props;
    const total = expenses.reduce((acc, expense) => {
      const exchangeRate = expense.exchangeRates?.[expense.currency]?.ask ?? 0;
      const convertedValue = parseFloat(expense.value) * parseFloat(exchangeRate);
      return acc + convertedValue;
    }, 0);

    return total.toFixed(2);
  };

  render() {
    const { email, expenses } = this.props;
    return (
      <header className="rounded-md border-2 border-gray-800 bg-gradient-to-r from-gray-800 via-gray-900 to-slate-900 text-white py-4 px-6 flex justify-between items-center">
        <p data-testid="email-field" className="text-lg font-bold">{`Email: ${email}`}</p>
        <div className="text-lg font-bold">
          <span className="mr-2">Despesa Total:</span>
          <h3 data-testid="total-field">{expenses.length > 0 ? this.expensesOutput() : '0.00'}</h3>
        </div>
        <h3 data-testid="header-currency-field" className="text-lg font-bold">BRL</h3>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(Header);
