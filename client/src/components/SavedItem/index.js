import React from 'react'
import Button from '../Button'
function SavedItem(props){
    return (
        <div>
            <div className="container">
            <img src={props.imageLinks} />
            <h4>{props.title}</h4>
            <h5>{props.authors}</h5>
            <p>{props.description}</p>
            <Button onClick={()=>props.onClick(props.id)}>Delete</Button>
        </div>
        </div>
    )
}

export default SavedItem;