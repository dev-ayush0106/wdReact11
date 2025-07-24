import React from 'react'
import ProductNo from './ProductNo'
import ProductName from './ProductName'
import ProductPrice from './ProductPrice'
import ProductRating from './ProductRating'

const Product = ({id,name,price,rating}) => {
  return (
    <div>
      <ProductNo id={id}/>
      <ProductName name={name}/>
      <ProductPrice price={price}/>
      <ProductRating rating={rating}/>
    </div>
  )
}

export default Product
