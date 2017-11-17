import React from 'react'

import { Button, Input } from 'components'

export const SignUp = () => (
  <div className="w66 center-element pa8">
    <div className="center-element w50 ba br-md bg-white pa8">
      <h1 className="tc mb4">Sign up</h1>
      <Input Medium type="text" className="mb4" name="firstName" label="first name"/>
      <Input Medium type="text" className="mb4" name="lastName" label="last name"/>
      <Input Medium type="text" className="mb4" name="email" label="email"/>
      <Input Medium type="password" className="mb4" name="password" label="password"/>
      <Input Medium type="password" className="mb4" name="password" label="re-enter password"/>
      <Button type="submit" Block Large className="mt2">Sign up</Button>
    </div>
  </div>
)
