import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import sessionReducer from 'reducers/session.reducer'

export const rootReducer = combineReducers({
  session: sessionReducer,
  routing: routerReducer,
  form: formReducer,
})
