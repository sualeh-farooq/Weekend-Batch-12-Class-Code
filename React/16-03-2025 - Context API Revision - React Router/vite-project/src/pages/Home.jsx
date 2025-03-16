import { Row  , Col}  from "react-bootstrap"
import { useContext } from "react"

import { AppContext } from "../Context/store"


export default function Home(){

    const {count , updateCount} = useContext(AppContext)



    return (
        <>
        {/* <Row>

            <Col sm={12} md={6} lg={4} >
            
            </Col>
            </Row>         */}

            <h1>Home</h1>

            The Count is {count}
            

            <br />
            <br />
            <br />

            <button onClick={updateCount} > Update Count </button>
        </>
    )
}