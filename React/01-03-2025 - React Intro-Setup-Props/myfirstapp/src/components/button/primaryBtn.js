


function PrimaryBtn({btnTitle , icon}) {
    return (
        <>
        <button>
            {btnTitle}
            </button> 
            <img src={icon}   width={50} height={50} />
        </>
    )
}

export default PrimaryBtn