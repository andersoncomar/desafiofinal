/**
 * Action Types
 */

export const Types = {
  REQUEST: 'auth/SIGNUP_REQUEST',
  SUCCESS: 'auth/SIGNUP_SUCCESS',
  FAILURE: 'auth/SIGNUP_FAILURE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  error: false,
  loading: false,
};

export default function signUp(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case Types.FAILURE:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export const Creators = {
  signUpRequest: (username, email, password) => ({
    type: Types.REQUEST,
    payload: { username, email, password },
  }),

  signUpSuccess: () => ({
    type: Types.SUCCESS,
  }),

  signUpFailure: () => ({
    type: Types.FAILURE,
  }),
};
