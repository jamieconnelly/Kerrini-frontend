import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { Button, Input } from 'components'


export const SignUp = () => {
  const handleSubmit = (values) => console.log(values)
  return (
    <div className="w66 center-element pa8">
      <div className="center-element w50 ba br-sm bg-white pa8">
        <h1 className="tc mb4 color">Sign up</h1>
        <form onSubmit={handleSubmit}>
          <Field component={Input} name="name" Medium type="text" className="mb4" label="full name"/>
          <Field component={Input} name="email" Medium type="text" className="mb4" label="email"/>
          <Field component={Input} name="password" Medium type="password" className="mb4" label="password"/>
          <Field component={Input} name="reEnteredPassword" Medium type="password" className="mb4" label="re-enter password"/>
          <Button type="submit" Block Large className="mt2">Sign up</Button>
        </form>
      </div>
    </div>
  )
}

export default reduxForm({
  form: 'signUp'
})(SignUp)

