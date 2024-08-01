'use client'

export default function ProductButton({price}){
    return (
        <div>
            <button onClick={()=>{console.log(price)}}>click me</button>
        </div>
    )
}