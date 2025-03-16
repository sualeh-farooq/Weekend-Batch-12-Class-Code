import { Row  , Col}  from "react-bootstrap"
import { useContext } from "react"

import { AppContext } from "../Context/store"

export default function About(){
    const {count} = useContext(AppContext)

    return (
        <>
        {/* <Row>

            <Col sm={12} md={6} lg={4} >
            
            </Col>
            </Row>         */}

            <h1>About Page</h1>

            The Count is {count}
        </>
    )
}