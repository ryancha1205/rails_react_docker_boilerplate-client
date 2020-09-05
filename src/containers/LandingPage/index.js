import { connect } from 'react-redux'

import LandingPage from '../../pages/LandingPage'
import * as productActions from '../../actions/Products'


const mapStateToProps = state => ({
  products: state.Products,
})

const mapDispatchToProps = dispatch => ({
  fetchProducts() {
    dispatch(productActions.fetchProducts())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
