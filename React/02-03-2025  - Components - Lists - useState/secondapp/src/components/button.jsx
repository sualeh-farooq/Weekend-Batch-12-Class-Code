import Button from 'react-bootstrap/Button';


export function PrimaryButton({btnTitle , btnFunc}){
    return (
        <Button onClick={btnFunc} variant='primary' >{btnTitle}</Button>
    )
}

export function SecondaryButton() {
    return (
        <Button variant='secondary' >Secondary Button</Button>
    )
}
