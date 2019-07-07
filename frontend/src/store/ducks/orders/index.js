/**
 * Action Types
 */

export const Types = {
  LOAD_REQUEST: "orders/LOAD_REQUEST",
  LOAD_SUCCESS: "orders/LOAD_SUCCESS"
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  data: []
};

export default function orders(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload.data
      };
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export const Creators = {
  loadOrdersRequest: () => ({
    type: Types.LOAD_REQUEST
  }),

  loadOrdersSuccess: data => ({
    type: Types.LOAD_SUCCESS,
    payload: { data }
  })
};
