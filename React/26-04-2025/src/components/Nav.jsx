import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

function NavExample({linkName , sendData}) {


    const [userInfo , setUserInfo] = useState('')






  return (
   <>
   
   <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">{linkName}</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>


    <input type='text' value={userInfo} onChange={(e)=>setUserInfo(e.target.value)} />


    <Button onClick={()=>sendData(`User Info : ${userInfo}`)}> Send Data to Parent </Button>
   </>



  );
}

export default NavExample;