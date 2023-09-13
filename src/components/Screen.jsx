/* eslint-disable react/prop-types */
import "./Screen.css"

const Screen = ({value, res}) => {
  return(
    <div className="screen">
      <span className="value">{value}</span>
      <span className="result">{res}</span>      
    </div>
  )
}

export default Screen