import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import sessionReducer from './session.reducer'

export const rootReducer = combineReducers({
  session: sessionReducer,
  routing: routerReducer,
})
