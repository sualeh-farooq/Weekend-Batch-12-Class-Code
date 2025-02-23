// export default function PrimaryButton(props){
//     return (
//         <>
//         <button>{props.title}</button>
//         <img src={props.img} alt={props.alt} width={50} height={50} />
//         </>
//     )
// }


export default function PrimaryButton({title , img , alt , btnFunc}){
    return (
        <>
        <button onClick={()=>btnFunc()}  >{title}</button>
        <img src={img} alt={alt} width={50} height={50} />
        </>
    )
}