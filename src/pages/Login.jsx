import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { emailSubmit } from '../redux/actions';
import { styles } from '../styles'; // Importe os estilos definidos

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    buttonDisabled: true,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    this.handleValidate();
  };

  handleSubmit = () => {
    const { history, dispatch } = this.props;
    dispatch(emailSubmit(this.state));
    history.push('/home');
  };

  handleValidate = () => {
    const { email, password } = this.state;
    const minChar = 5;
    const charValidate = password.length >= minChar;
    const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    this.setState({
      buttonDisabled: !(emailValidate && charValidate),
    });
  };

  render() {
    const { email, password, buttonDisabled } = this.state;
    return (
      <div className={`bg-primary min-h-screen flex items-center justify-center ${styles.padding}`}>
        <form className="bg-gray-800 rounded-lg shadow-lg p-8">
          <label htmlFor="email-input" className="block mb-2">Email:</label>
          <input
            type="email"
            name="email"
            id="email-input"
            placeholder="Insert your email"
            data-testid="email-input"
            value={email}
            onChange={this.handleChange}
            className="border border-red-300 px-4 py-2 mb-4 w-full rounded-md focus:border-primary"
          />
          <label htmlFor="password-input" className="block mb-2">Password:</label>
          <input
            type="password"
            name="password"
            id="password-input"
            placeholder="******"
            data-testid="password-input"
            value={password}
            onChange={this.handleChange}
            className="border border-gray-300 px-4 py-2 mb-6 w-full rounded-md focus:outline-none focus:border-primary"
          />

          <button
            type="button"
            disabled={buttonDisabled}
            onClick={this.handleSubmit}
            className={`bg-green-900 text-white px-4 py-2 rounded-md focus:outline-none ${buttonDisabled ? 'opacity-20 cursor-not-allowed' : ''}`}
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(null)(Login);