import React from 'react'
import { Switch, Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'

const Home = () => (
  <div>Hello</div>
)

const SignUp = () => (
  <div>
    <input type="text" placeholder="name"/>
  </div>
)

export const AppRouter = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)
