/**
 * Action Types
 */

export const Types = {
  REQUEST: 'sizes/REQUEST',
  SUCCESS: 'sizes/SUCCESS',
  FAILURE: 'sizes/FAILURE',
  SET: 'sizes/SET',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  data: [],
  currentSize: null,
};

export default function sizes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state };
    case Types.SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };
    case Types.FAILURE:
      return { ...state };
    case Types.SET:
      return { ...state, currentSize: action.payload.size };
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export const Creators = {
  loadSizesRequest: productType => ({
    type: Types.REQUEST,
    payload: { productType },
  }),

  loadSizesSuccess: data => ({
    type: Types.SUCCESS,
    payload: { data },
  }),

  loadSizesFailure: () => ({
    type: Types.FAILURE,
  }),

  sizesSet: data => ({
    type: Types.SET,
    payload: { size: data },
  }),
};
