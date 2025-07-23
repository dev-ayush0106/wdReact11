import "./second.css"

export default function Second(){
    let data={
        name:"Vinod",
        city:"Ghaziabad",
        profession:"Software Engg",
        company:"Slice"
    }

    return(
        <>
        {/* <h1>Hello This is second Class.</h1>
        <h2>How are you?</h2> */}

        <h1 style={{color:"blue"}}>Name:{data.name}</h1>
        <h1>City:{data.city}</h1>
        <h1>Profession:{data.profession}</h1>
        <h1>Company Name:{data.company}</h1>
        </>
    )
}

export function Second1(){
    return(
        <h1>New Function In Second</h1>
    )
}

export function Second2(){
    return(
        <h1>Third Function</h1>
    )
}