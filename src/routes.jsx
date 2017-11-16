import React from 'react'
import { Switch, Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: null }
  }

  componentDidMount() {
    fetch('/auth/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'usersname',
        email: 'usersname',
        password: 'usersname',
      })
    })
      .then((res) => res.json())
      .then((data) => this.setState({ data }))
  }

  render() {
    return (<div>{this.state.data ? this.state.data : 'Hello'}</div>)
  }
}

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
