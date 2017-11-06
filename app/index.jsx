import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

import { rootReducer } from './reducers/root.reducer'

const root = document.getElementById('app')

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(
      thunkMiddleware,
      )
    )
  )
  return store
}

const store = configureStore()

const Home = () => (
  <div>Hello</div>
)

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  root,
)
