export default function MyList({data}){
    return (
        <>
        
        <ul>
           {data.map((val, index)=>{
            return (
                <>
                <li key={index} > {val} </li>
                </>
            )
           })}
        </ul>
        </>
    )
}