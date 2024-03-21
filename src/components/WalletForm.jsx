import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencyApi, saveExpenses } from '../redux/actions';
import currencyApi from './helpers/currencyApi';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencyApi());
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSave = async () => {
    const { dispatch } = this.props;
    const { id, value, description, currency, method, tag } = this.state;

    const exchangeCall = await currencyApi();

    const expenses = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: exchangeCall,
    };
    dispatch(saveExpenses(expenses));

    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }));
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
        <div className="bg-gray-500 rounded-md shadow-md p-6">
        <form className="inline-flex flex-col gap-4">
          <label htmlFor="value-input">
            Valor:
            <input
              type="text"
              name="value"
              value={value}
              id="value-input"
              data-testid="value-input"
              placeholder="Valor"
              onChange={this.handleChange}
            />
          </label>
      
          <label htmlFor="description-input">
            Descrição:
            <input
              type="text"
              name="description"
              value={description}
              id="description-input"
              data-testid="description-input"
              placeholder="Descrição"
              onChange={this.handleChange}
            />
          </label>
      
          <label htmlFor="currency-input">
            Selecione a moeda:
            <select
              name="currency"
              value={currency}
              id="currency-input"
              data-testid="currency-input"
              onChange={this.handleChange}
            >
              {currencies.map((currencie, index) => (
                <option key={index} value={currencie}>
                  {currencie}
                </option>
              ))}
            </select>
          </label>
      
          <label htmlFor="method-input">
            Método de pagamento:
            <select
              name="method"
              value={method}
              id="method-input"
              data-testid="method-input"
              onChange={this.handleChange}
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
      
          <label htmlFor="tag-input">
            Categoria:
            <select
              name="tag"
              value={tag}
              id="tag-input"
              data-testid="tag-input"
              onChange={this.handleChange}
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
      
          <button type="button" onClick={this.handleSave} className="bg-primary text-white py-2 px-4 rounded-md">
            Adicionar despesa
          </button>
        </form>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func,
  currencies: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

WalletForm.defaultProps = {
  currencies: [],
};

export default connect(mapStateToProps)(WalletForm);
