/**
 * Action Types
 */

export const Types = {
  ADD_REQUEST: 'orders/ADD_REQUEST',
  ADD_SUCCESS: 'orders/ADD_SUCCESS',
  LOAD_REQUEST: 'orders/LOAD_REQUEST',
  LOAD_SUCCESS: 'orders/LOAD_SUCCESS',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  data: [],
};

export default function orders(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };
    case Types.ADD_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export const Creators = {
  addOrderSuccess: () => ({
    type: Types.ADD_SUCCESS,
  }),

  addOrderRequest: (observation, zip, street, number, neighborhood) => ({
    type: Types.ADD_REQUEST,
    payload: {
      observation,
      zip,
      street,
      number,
      neighborhood,
    },
  }),

  loadOrdersRequest: () => ({
    type: Types.LOAD_REQUEST,
  }),

  loadOrdersSuccess: data => ({
    type: Types.LOAD_SUCCESS,
    payload: { data },
  }),
};
