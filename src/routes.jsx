import React from 'react'
import { Switch, Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'

import SignUp from './pages/SignUp/SignUp'

export const AppRouter = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)
