import React from 'react';
import './Button.css';

const STYLES = [
  'btn--primary',
  'btn--outline'
]

const SIZES = [
  'btn--medium',
  'btn--large'
]

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
  // if button already has a style, then use it, if not use style at first position of STYLES array
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

  const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
      {children}
    </button>
  )
}