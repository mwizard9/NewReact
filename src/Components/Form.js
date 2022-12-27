import React from 'react'

export default function Form(props) {
  return (
    <div>
        <div className="mb-3">
            <label for="mybox" className="form-label">{props.heading}</label>
            <textarea className="form-control" id="mybox" rows="3"></textarea>
        </div>
    </div>
  )
}
