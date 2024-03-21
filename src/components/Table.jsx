import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpenses } from '../redux/actions';

class Table extends Component {
  handleExpense = (id) => {
    const { dispatch } = this.props;
    dispatch(removeExpenses(id));
  };

  render() {
    const { expenses } = this.props;
    return (
      <div className="flex justify-center">
        <table className="">
          <thead>
            <tr className="bg-green-800">
              <th className="px-8 py-2 rounded-md">Descrição</th>
              <th className="px-8 py-2 rounded-md">Tag</th>
              <th className="px-8 py-2 rounded-md">Método de pagamento</th>
              <th className="px-8 py-2 rounded-md">Valor</th>
              <th className="px-8 py-2 rounded-md">Moeda</th>
              <th className="px-8 py-2 rounded-md">Câmbio utilizado</th>
              <th className="px-8 py-2 rounded-md">Valor convertido</th>
              <th className="px-8 py-2 rounded-md">Moeda de conversão</th>
              <th className="px-8 py-2 rounded-md">Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(({
              id,
              value,
              description,
              currency,
              method,
              tag,
              exchangeRates,
            }, index) => (
              <tr key={id} className={index % 2 === 0 ? 'bg-gray-200 text-black' : 'bg-gray-400 text-black'}>
                <td className="px-4 py-2 text-center rounded-md">{description}</td>
                <td className="px-4 py-2 text-center rounded-md">{tag}</td>
                <td className="px-4 py-2 text-center rounded-md">{method}</td>
                <td className="px-4 py-2 text-center rounded-md">{Number(value).toFixed(2)}</td>
                <td className="px-4 py-2 text-center rounded-md">{exchangeRates[currency].name}</td>
                <td className="px-4 py-2 text-center rounded-md">{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td className="px-4 py-2 text-center rounded-md">{(Number(value) * Number(exchangeRates[currency].ask)).toFixed(2)}</td>
                <td className="px-4 py-2 text-center rounded-md">Real</td>
                <td className="px-4 py-2 text-center rounded-md">
                  <button
                    type="button"
                    className="bg-green-500 rounded-md px-2 py-1 text-white mr-2"
                  >
                    Editar
                  </button>
                  <button
                    data-testid="delete-btn"
                    id={id}
                    type="button"
                    onClick={() => this.handleExpense(id)}
                    className="bg-red-500 rounded-md px-2 py-1 text-white"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  dispatch: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    currency: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps)(Table);
