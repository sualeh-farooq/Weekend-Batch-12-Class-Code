// export default function ChildComponent({title}){
//     return (
//         <>
//         <button> {title}</button>
//         </>
//     )
// }
import React from "react"

const ChildComponent = React.memo(({title , handleChange})=>{
    console.log('Child component re-rendered')
    return (
        <>
        <button  onClick={handleChange} > {title} </button>
        
        </>
    )
})

export default ChildComponent