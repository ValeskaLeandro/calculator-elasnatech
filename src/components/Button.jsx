/* eslint-disable react/prop-types */
import "./Button.css"
const Button = ({label, onclick, classname}) => {
  return(
    <button onClick={onclick} className={`${classname}`}>{label}</button>
  )
}

export default Button