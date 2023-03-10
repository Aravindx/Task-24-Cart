import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';


const Product=(props)=>{
    const{name,image,price,categories}=props.product;
  return (
    <div className='container'>
        <div className='product-card shadow-sm'>
            <img src={image} className='product-img img-fluid' alt=""/>
            <h5 className='categories'>{categories}</h5>
            <h5 className='product-title'>{name}</h5>
            <h5>Price:${price}</h5>
            <Button onClick={()=> props.addProduct(props.product)}
            className="btn btn-success" variant="success">
                <FontAwesomeIcon icon={faPlus}/> Add to Card</Button>
        </div>
        </div>
  )
}

export default Product