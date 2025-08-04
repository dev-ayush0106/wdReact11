import React, { useEffect, useState } from 'react'
import "./page.css"
import ProductPage from './ProductPage';
const Ninth = () => {
    let [products, setProducts] = useState([]);
    let [current,setCurrent]=useState(0);
    // How to fetch the data?
    // fetch() : for handling the promise then & catch

    let url = "https://dummyjson.com/products?limit=500"; // api
    function dataFetch() {
        fetch(url) // promise return
            .then((res) => {
                return res.json() // one more promise
            })
            .then((data) => {
                // console.log(data.products);
                setProducts(data.products);
            })
            .catch((err) => { // single catch can detect multiple then errors
                console.log(err);
            })
    }

    // useEffect(callback function,dependency)
    // whenever we will call an api we will use []
    // because it will render only on first refresh

    useEffect(() => {
        dataFetch()
    }, []);

    // Not a good practice
    // dataFetch()

    let PAGE_SIZE=10; // 10 products is listed on this page;
    let noofpage=Math.ceil(products.length/PAGE_SIZE); // 20

    let start=current*PAGE_SIZE;
    let end= start+PAGE_SIZE;
    console.log(products)
    return (
        <div>
            <h1>Data 1 Fetching</h1>

            {[...Array(noofpage).keys().map((n)=>{
                return(
                    <button
                    className={(current==n)?"active":""}
                    onClick={()=>{setCurrent(n)}}>{n+1}</button>
                )
            })]}

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {products.slice(start,end).map((el) => {
                    return (
                        <ProductPage id={el.id} title={el.title} thumbnail={el.thumbnail} price={el.price} />
                    )
                })}
            </div>

        </div>
    )
}

export default Ninth
