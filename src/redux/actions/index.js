import currencyApi from '../../components/helpers/currencyApi';

export const EMAIL_SUBMIT = 'EMAIL_SUBMIT';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const FETCH_CURRENCY = 'FETCH_CURRENCY';
export const REMOVE_EXPENSES = 'REMOVE_EXPENSES';

export const emailSubmit = (email) => ({
  type: EMAIL_SUBMIT,
  payload: email,
});

export const fetchCurrency = (currencies) => ({
  type: FETCH_CURRENCY,
  payload: currencies,
});

export const saveExpenses = (expense) => ({
  type: SAVE_EXPENSES,
  payload: expense,
});

export const removeExpenses = (id) => ({
  type: REMOVE_EXPENSES,
  payload: id,
});

export const fetchCurrencyApi = () => async (dispatch) => {
  try {
    const data = await currencyApi();
    const currency = Object.keys(data)
      .filter((currencie) => currencie !== 'USDT');
    dispatch(fetchCurrency(currency));
  } catch (error) {
    console.log(error);
  }
};
