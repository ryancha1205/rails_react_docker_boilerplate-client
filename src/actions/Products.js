import { createAction } from 'redux-actions'
import axios from 'axios'
import humps from 'humps'

// const startFetchProducts = createAction('START_FETCH_PRODUCTS')
const finishFetchProducts = createAction('FINISH_FETCH_PRODUCTS')

export const fetchProducts = () => {
  return dispatch => {
    // dispatch(startFetchProducts())
    axios.get(`${process.env.REACT_APP_API_HOST}/api/v1/products`).then(response => {
      dispatch(finishFetchProducts(humps.camelizeKeys({ data: response.data })))
    }).catch(response => {
      console.error(response)
    })
  }
}