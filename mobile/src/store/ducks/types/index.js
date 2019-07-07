/**
 * Action Types
 */

export const Types = {
  REQUEST: 'types/REQUEST',
  SUCCESS: 'types/SUCCESS',
  FAILURE: 'types/FAILURE',
  SET: 'types/SET',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  data: [],
  currentType: null,
};

export default function types(state = INITIAL_STATE, action) {
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
      return { ...state, currentType: action.payload.productType };
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export const Creators = {
  loadTypesRequest: product => ({
    type: Types.REQUEST,
    payload: { product },
  }),

  loadTypesSuccess: data => ({
    type: Types.SUCCESS,
    payload: { data },
  }),

  loadTypesFailure: () => ({
    type: Types.FAILURE,
  }),

  typesSet: data => ({
    type: Types.SET,
    payload: { productType: data },
  }),
};
