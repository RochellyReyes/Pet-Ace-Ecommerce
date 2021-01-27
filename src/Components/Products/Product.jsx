import React from 'react';


const Product = (props) => {

    return (
        <div className="Product">
            <p className="PName">{props.name}</p>
            <img className="PImg" src={props.imgURL} width={250} height={250} alt={props.alt}/>
            <p className="PDescription">{props.description}</p>
            <p className="PPrice">${props.price.toFixed(2)}</p>
            <button onClick={()=> window.open(`${props.link}`, `_blank`)}> View Product</button>
        </div>
    )
};


export default Product;