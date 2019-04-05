import React from 'react'

function Button(props){
    return(
        <button onClick={props.onClick} className="btn btn-success mb-2">{props.children}</button>
    )
}

export default Button;