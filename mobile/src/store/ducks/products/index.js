/**
 * Action Types
 */

export const Types = {
  REQUEST: 'product/REQUEST',
  SUCCESS: 'product/SUCCESS',
  FAILURE: 'product/FAILURE',
  SET: 'product/SET',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  data: [],
  currentProduct: null,
  error: false,
  loading: false,
};

export default function product(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };
    case Types.FAILURE:
      return { ...state, error: true, loading: false };
    case Types.SET:
      return { ...state, loading: false, currentProduct: action.payload.product };
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export const Creators = {
  loadProductsRequest: () => ({
    type: Types.REQUEST,
  }),

  loadProductsSuccess: data => ({
    type: Types.SUCCESS,
    payload: { data },
  }),

  loadProductsFailure: () => ({
    type: Types.FAILURE,
  }),

  productSet: data => ({
    type: Types.SET,
    payload: { product: data },
  }),
};
