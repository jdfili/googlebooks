import React from 'react'

function Button(props){
    return(
        <button onClick={props.onClick} className="btn btn-success">Save</button>
    )
}

export default Button;