import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import logger from 'redux-logger'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'

import * as reducers from './reducers'

const persistConfig = {
  key: 'myPersistKeyword',
  storage: storageSession,
  whitelist: []
}

export default function createStore(history) {
  return reduxCreateStore(
    persistReducer(
      persistConfig,
      combineReducers({
        ...reducers,
        router: routerReducer,
      })
    ),
    applyMiddleware(
      logger,
      thunk,
      routerMiddleware(history)
    )
  )
}
