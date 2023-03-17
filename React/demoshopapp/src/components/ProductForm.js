import { useState } from 'react';
import './ProductForm.css';

function ProductForm(){


    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value);
        // console.log('title clicked');
        // console.log(event.target.value);
    }
    function dateChangeHandler(event){
        // console.log('date is clicked');
        // console.log(event.target.value);
        setDate(event.target.value);
        // console.log(event.target.value);
        // console.log('printing');
        // console.log(title);
        // console.log(date);
    }

    function submitHandler(event){
        event.preventDefault(); 
        const productData = {
            title:newTitle,
            date:newDate
        };
        console.log(productData);  

    }
    return(
        <form onSubmit={submitHandler}>
        <div className='new-product__controls'>
           <div className='new-product__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}></input>
            </div>
            <div className='new-product__control'>
                <label>Date</label>
                <input type='date' min='2021-01-10' max='2021-12-12' onChange={dateChangeHandler} ></input>
            </div>
            <div className='new-product_button'>
                <button type='submit'>Add Product</button>
            </div>
        </div>
            
        </form>
    )

}

export default ProductForm;