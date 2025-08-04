import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductPage = ({id,title,thumbnail,price}) => {
    let navigate=useNavigate()
    function move(){
        navigate(`/products/${id}`)
    }
    return (
        <div>
            <div onClick={move} style={{ width: "200px", border: "2px solid white", borderRadius: "10px", margin: "10px" }}>
                <p>{title}</p>
                <img width="100px" src={thumbnail} alt="" />
                <p>{price}</p>
            </div>
        </div>
    )
}

export default ProductPage
