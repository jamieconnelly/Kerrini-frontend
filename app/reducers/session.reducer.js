import { createReducer } from '../utils/reducer'
import initialState from './initialState'

const { session: initialSessionState } = initialState

const setCurrentUser = (sessionState, { currentUser }) => ({
  ...sessionState,
  currentUser,
})

const register = (state) => ({
  ...state,
  isRegistered: true,
})

export default createReducer(initialSessionState, {
  SET_CURRENT_USER: (state, { currentUser }) => setCurrentUser(state, { currentUser: currentUser.id }),
  REGISTER: register,
})
