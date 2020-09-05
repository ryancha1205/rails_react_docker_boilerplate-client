import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { ConnectedRouter } from 'react-router-redux'
// import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { persistStore } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import { createBrowserHistory } from 'history'
import './index.css'
import createStore from './createStore'

const history = createBrowserHistory()
const store = createStore(history)
const persistor = persistStore(store);

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </PersistGate>
    </Provider>,
  </MuiThemeProvider>,
  document.getElementById('root')
)
