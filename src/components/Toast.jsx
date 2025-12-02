import React from 'react'

const Toast = ({message, styling}) => {
  return (
    <div className="toast toast-middle">
          <div className={styling}>
            <span className="font-stretch-extra-condensed">{message}</span>
          </div>
          </div>
  )
}

export default Toast;