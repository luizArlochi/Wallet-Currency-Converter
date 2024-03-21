import { EMAIL_SUBMIT } from '../actions';

const INITIAL_STATE_USER = {
  email: '',
};

const userReducer = (state = INITIAL_STATE_USER, action) => {
  switch (action.type) {
  case EMAIL_SUBMIT: {
    return {
      ...state,
      email: action.payload.email,
    };
  }
  default: return state;
  }
};

export default userReducer;
