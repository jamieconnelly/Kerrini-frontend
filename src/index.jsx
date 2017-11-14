import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

import { rootReducer } from 'reducers/root.reducer'
import { AppRouter } from 'routes'

import './styles/styles.scss'

const root = document.getElementById('app')
const history = createHistory()

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(
      thunkMiddleware,
      routerMiddleware(history),
      )
    )
  )
  return store
}

const store = configureStore()

ReactDOM.render(
  <AppRouter store={store} history={history} />,
  root,
)
