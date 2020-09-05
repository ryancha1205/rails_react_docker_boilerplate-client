import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import LandingPage from './containers/LandingPage'
import { withStyles } from '@material-ui/core/styles'


const styles = ({ breakpoints, spacing }) => ({
  main: {
    marginTop: 56, // Headerの高さが56px
    padding: spacing.unit * 2,
    [breakpoints.down('sm')]: {
      padding: 0
    }
  }
})

class App extends Component {
  render() {
    return (
      <>
        {/* <main className={classes.main}> */}
          <Route exact path="/" component={LandingPage} />
        {/* </main> */}
        {/* <SmoothScroll /> */}
      </>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object
}


export default withStyles(styles)(App)
