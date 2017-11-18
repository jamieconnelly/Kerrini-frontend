import React from 'react'
import './Input.scss'
import classNames from 'classnames'

export const Input = ({
  className,
  Disabled,
  input,
  label,
  Large,
  Medium,
  meta: {
    error,
    touched,
  },
  name,
  text,
  type,
}) => {
  const sizes = classNames(
    'input', {
    'medium': Medium,
    'large': Large,
  })
  return (
    <div>
      {label && <label className="ttu fw2 fs-xs" htmlFor={name}>{label}</label>}
      <input
        styleName={sizes}
        className={className}
        disabled={Disabled}
        type={type}
        {...input}
      />
      {touched && error && <span className="color red fs-xs">{`* ${error}`}</span>}
    </div>
  )
}
