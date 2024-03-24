import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpenses } from '../redux/actions';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingId: null,
      editedData: {},
    };
  }

  handleExpense = (id) => {
    const { dispatch } = this.props;
    dispatch(removeExpenses(id));
  };

  handleEdit = (id) => {
    this.setState({ editingId: id });
  };

  handleSave = () => {
    // Implementar lógica para salvar as alterações
    // Aqui você pode despachar uma ação para atualizar os dados no estado Redux
    this.setState({ editingId: null, editedData: {} });
  };

  handleCancel = () => {
    this.setState({ editingId: null, editedData: {} });
  };

  handleInputChange = (e, field) => {
    const { editedData } = this.state;
    this.setState({
      editedData: {
        ...editedData,
        [field]: e.target.value,
      },
    });
  };

  render() {
    const { expenses } = this.props;
    const { editingId, editedData } = this.state;
    return (
      <div className="flex justify-center">
        <table className="">
          <thead>
            <tr className="bg-gray-600">
              <th className="px-8 py-2 rounded-md">Descrição</th>
              <th className="px-8 py-2 rounded-md">Tag</th>
              <th className="px-8 py-2 rounded-md">Método de pagamento</th>
              <th className="px-8 py-2 rounded-md">Valor</th>
              <th className="px-8 py-2 rounded-md">Moeda</th>
              <th className="px-8 py-2 rounded-md">Câmbio utilizado</th>
              <th className="px-8 py-2 rounded-md">Valor convertido</th>
              <th className="px-8 py-2 rounded-md">Moeda de conversão</th>
              <th className="px-8 py-2 rounded-md">Excluir</th>
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
              <tr key={id} className={index % 2 === 0 ? 'bg-gradient-to-r from-gray-600 via-gray-900 to-blue-900 text-white' : 'bg-gradient-to-r from-blue-900 via-gray-900 to-gray-600 text-white'}>
                <td className="px-4 py-2 text-center rounded-md">{description}</td>
                <td className="px-4 py-2 text-center rounded-md">{tag}</td>
                <td className="px-4 py-2 text-center rounded-md">{method}</td>
                <td className="px-4 py-2 text-center rounded-md">{Number(value).toFixed(2)}</td>
                <td className="px-4 py-2 text-center rounded-md">{exchangeRates[currency].name}</td>
                <td className="px-4 py-2 text-center rounded-md">{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td className="px-4 py-2 text-center rounded-md">{(Number(value) * Number(exchangeRates[currency].ask)).toFixed(2)}</td>
                <td className="px-4 py-2 text-center rounded-md">Real</td>
                <td className="px-4 py-2 text-center rounded-md">
                  {/* <button
                    type="button"
                    className="bg-green-500 rounded-md px-2 py-1 text-white mr-2"
                  >
                    Editar
                  </button> */}
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
