export default function ChildComponent({title}){

    console.log('Child component re-rendered')
    return (
        <>
        <button> {title}</button>
        </>
    )
}