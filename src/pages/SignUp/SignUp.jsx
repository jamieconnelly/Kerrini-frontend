import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import UserActionCreators from 'actions/user.actionCreators'
import { Button, Input } from 'components'

import { inputsMap } from './constants'

const SignUp = ({ handleSubmit, submitting, invalid }) => (
  <div className="center-element w33 ba br-sm bg-white pa8 mt10">
    <h2 className="tc mb4 color">Create an account</h2>
    <form onSubmit={handleSubmit}>
      {Object.keys(inputsMap)
        .map((key, idx) => (
          <Field
            key={idx}
            component={Input}
            name={key}
            Medium
            type={inputsMap[key].type}
            className="mb4"
            label={inputsMap[key].label}
            validate={inputsMap[key].validate}
          />
      ))}
      <Button type="submit" Block Large className="mt2" Disabled={submitting || invalid}>Sign up</Button>
    </form>
  </div>
)

const SignUpForm = reduxForm({
  form: 'signUp',
})(SignUp)

export default connect(
  null,
  (dispatch) => ({
    onSubmit: (values) => {
      return dispatch(UserActionCreators.signUp(values))
    }
  })
)(SignUpForm)
