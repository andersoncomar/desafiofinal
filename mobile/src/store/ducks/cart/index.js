/**
 * Action Types
 */

export const Types = {
  ADD_REQUEST: 'cart/ADD_REQUEST',
  UPDATE_SUCCESS: 'cart/UPDATE_SUCCESS',
  DELETE_REQUEST: 'cart/DELETE_REQUEST',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  data: [],
  subTotal: 0,
};

let newSubtotal = 0;

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.UPDATE_SUCCESS:
      newSubtotal = 0;

      action.payload.data.map((item) => {
        newSubtotal += item.price;

        return item;
      });

      return {
        ...state,
        data: action.payload.data,
        // data: [...state.data, action.payload.data],
        subTotal: Math.round(newSubtotal * 100) / 100,
      };
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export const Creators = {
  updateCartSuccess: data => ({
    type: Types.UPDATE_SUCCESS,
    payload: { data },
  }),

  addItemRequest: size => ({
    type: Types.ADD_REQUEST,
    payload: { size },
  }),

  deleteItemRequest: id => ({
    type: Types.DELETE_REQUEST,
    payload: { id },
  }),
};
