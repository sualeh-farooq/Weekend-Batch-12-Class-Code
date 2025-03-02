export function List({data}){
    return (
        <>
        
        <ul>
            {
                data.map((value , index) =>{
                    return (
                        <li key={value.id} > {value.name}  </li>
                    )
                })
            }
        </ul>
        </>
    )
}