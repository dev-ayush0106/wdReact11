import Product from "./Product";

function Third({name}){
    let p1={
        id:1,
        pname:"iphone",
        price:70000,
        rating:5
    }

    let p2={
        id:2,
        pname:"Google Pixel",
        price:80000,
        rating:4
    }

    let p3={
        id:3,
        pname:"Oneplus",
        price:50000,
        rating:4
    }
    return(
        <>
            {/* <h1>Props</h1>
            <p>Names:{name}</p> */}
            <Product id={p1.id} name={p1.pname} price={p1.price} rating={p1.rating}/>
            <Product id={p2.id} name={p2.pname} price={p2.price} rating={p2.rating}/>
            <Product id={p3.id} name={p3.pname} price={p3.price} rating={p3.rating}/>
        </>
    )
}

export default Third;