import WebApi from 'utils/WebApi'

import { UserActions as Actions } from './actions'

const signUp = (values) => (dispatch) => {
  return WebApi.signUp(values)
    .then((data) => {
      if (!data) {
        throw new Error('an error occured, please try again')
      }
    })
}

export default {
  signUp,
}
