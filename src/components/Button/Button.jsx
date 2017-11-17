import React from 'react'
import classNames from 'classnames'

import './Button.scss'

export const Button = ({
  Block,
  children,
  className,
  DarkBlue,
  Disabled,
  Green,
  Grey,
  isLoading,
  Large,
  name,
  Red,
  Small,
  type,
  White,
  Yellow,
}) => {
  const btnClasses = classNames(
    'btn', {
      'small': Small,
      'large': Large,
      'btn-block': Block,
      'green': Green,
      'red': Red,
      'yellow': Yellow,
      'dark-blue': DarkBlue,
      'grey': Grey,
      'white': White,
      'disabled': Disabled,
      'loading': isLoading,
    }
  )
  return (
    <button
      name={name}
      styleName={btnClasses}
      className={className ? className : ''}
      type={type || 'button'}
    >
      <div style={{visibility: isLoading ? 'hidden' : 'visible'}}>{children}</div>
    </button>
  )
}
