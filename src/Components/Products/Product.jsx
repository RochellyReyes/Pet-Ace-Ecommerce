import React from 'react';
//styling for divs can be added to this file
//logic to loop through data to then pass to product to display one by one


const Product = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <img src={props.imgURL} width={250} height={250} alt={props.alt}/>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    )
};


export default Product;