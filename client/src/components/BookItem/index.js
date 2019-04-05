import React from 'react';
import Button from '../Button/index';

function BookItem(props) {
    return (
        <div className="container">
            <img src={props.imageLinks} />
            <h4>{props.title}</h4>
            <h5>{props.authors}</h5>
            <h6>{props.categories}</h6><hr />
            <p>{props.description}</p>
            <Button onClick={()=>props.onClick(props.id)}>Save</Button>
        </div>
    )
};

export default BookItem;