import Form from 'react-bootstrap/Form';
import axios from 'axios'

import { useState } from 'react';
import { Button } from 'react-bootstrap';


function RegistrationForm() {
  
    const [formData , setFormData] = useState({
        name: '' , email: '' , image: null
    })

    const handleInput = (e) => {
        const {name , value} = e.target
        setFormData((prev)=>({
            ...prev ,
            [name]: value
        }))
    }
    const handleImage = (e) => {
        const imageFile = e.target.files[0]
        setFormData((prev)=>({
            ...prev ,
            image: imageFile
        }))
    }

    const handleSubmit = async () => {
       if(!formData.name || !formData.email || !formData.image) {
        alert('All Fields are required')
       }

       const formDataToSend = new FormData()

       formDataToSend.append('name' , formData.name)
       formDataToSend.append('email' , formData.email)
       formDataToSend.append('image' , formData.image)

       try {
        const response = await axios.post('http://localhost:5000/api/user/create' , formDataToSend , {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(response.data)

        if(!response.data.success) {
          alert(response.data.message) // toast.error(message)
        } else {
          alert(response.data.message) //toast.succes(message)
        }
       } catch (error) {
        
       }
    }
  
    return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control  name='name' onChange={handleInput} value={formData.name} type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email </Form.Label>
        <Form.Control  name='email' onChange={handleInput} value={formData.email}  type="email" />
      </Form.Group>
      
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Photo</Form.Label>
        {/* <Form.Control   /> */}
        <input accept='image/*'  onChange={handleImage} name='image' type="file" />
      </Form.Group>

      <Button onClick={handleSubmit} type='button'>
            Submit
      </Button>
    </Form>
  );
}

export default RegistrationForm;