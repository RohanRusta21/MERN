import React from 'react';

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';
import { useState } from 'react';

const ProductItem = (props) =>{

    const [title,setTitle] = useState(props.title);
    
    // let title =props.title;

    function clickHandler(){
        // title="popcorn";
        setTitle("Popcorn");
        console.log('handler clicked');
    }
    return(
        <Card className='product-item'>
            <ProductDate  date ={props.date}></ProductDate>      
            <div className='product-item__description'>
                <h2>{title}</h2>
            </div>
            <button onClick={clickHandler}>Add to Cart</button>
        </Card>
    )
};

export default ProductItem;