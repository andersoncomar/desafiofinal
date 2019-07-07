/**
 * Action Types
 */

export const Types = {
  REQUEST: 'auth/SIGNIN_REQUEST',
  SUCCESS: 'auth/SIGNIN_SUCCESS',
  FAILURE: 'auth/SIGNIN_FAILURE',
  NOT_RULE: 'auth/SIGNIN_NOT_RULE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  token: null,
  auth: false,
  error: false,
  loading: false,
};

export default function signIn(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        auth: true,
        error: false,
        loading: false,
      };
    case Types.FAILURE:
      return { ...state, error: true, loading: false };
    case Types.NOT_RULE:
      return { ...state, error: false, loading: false };
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export const Creators = {
  signInRequest: (email, password) => ({
    type: Types.REQUEST,
    payload: { email, password },
  }),

  signInSuccess: token => ({
    type: Types.SUCCESS,
    payload: { token },
  }),

  signInFailure: () => ({
    type: Types.FAILURE,
  }),

  signInNotRule: () => ({
    type: Types.NOT_RULE,
  }),
};
