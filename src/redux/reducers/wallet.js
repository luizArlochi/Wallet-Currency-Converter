import { FETCH_CURRENCY, SAVE_EXPENSES, REMOVE_EXPENSES } from '../actions';

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const walletReducer = (state = INITIAL_STATE_WALLET, action) => {
  switch (action.type) {
  case FETCH_CURRENCY: {
    return {
      ...state,
      currencies: action.payload,
    };
  }
  case SAVE_EXPENSES: {
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  }

  case REMOVE_EXPENSES: {
    const updatedExpenses = state.expenses
      .filter(({ id }) => id !== Number(action.payload));
    return {
      ...state,
      expenses: updatedExpenses,
    };
  }
  default: return state;
  }
};

export default walletReducer;
