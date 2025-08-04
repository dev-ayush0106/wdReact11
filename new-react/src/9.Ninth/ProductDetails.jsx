import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    let{id}=useParams();
  return (
    <div>
        <h1>{id}</h1>
      <h1>title</h1>
      <img src="" alt="dhh" />
      <p>description</p>
      <p>price</p>
    </div>
  )
}

export default ProductDetails
