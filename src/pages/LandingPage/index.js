
import React, { useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = ({ breakpoints, spacing }) => ({
  content: {
    position: 'relative'
  },
  hide: {
    display: 'none'
  },
  userAndSearchForm: {
    [breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  chevron: {
    position: 'absolute',
    top: spacing.unit * 2,
    right: spacing.unit * 2
  }
})

const LandingPage = props => {
  const { products } = props

  useEffect(() => {
    props.fetchProducts()
  }, [])
  console.log('records', products.records)
  return (
    <>
      <ul>
        {products.records && products.records.map((product) => (
          <li key={product.id}>{product.product}</li>
        ))}
      </ul>
    </>
  )
}

export default withStyles(styles)(LandingPage)