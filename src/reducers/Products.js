import { handleActions } from 'redux-actions'

const initialState = {
  records: []
}

export default handleActions({
  FINISH_FETCH_PRODUCTS: (state, action) => ({
    ...state,
    records: [
      ...state.records,
      ...action.payload.data, // responseがaction.payloadになって渡される
    ],
  }),
}, initialState)