import React from "react";
import s from './button.module.css'

class Button extends React.Component {
  render() {
    const {active, onClick, title} = this.props
    const button = active ? s.activeButton : s.noActiveButton
    return (
      <div className={button} onClick={onClick}>{title}</div>
    )
  }
}

export default Button