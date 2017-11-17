import React from 'react'
import './Input.scss'
import classNames from 'classnames'

export const Input = ({
  className,
  input,
  Disabled,
  Large,
  Medium,
  name,
  text,
  type,
  label,
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
    </div>
  )
}
