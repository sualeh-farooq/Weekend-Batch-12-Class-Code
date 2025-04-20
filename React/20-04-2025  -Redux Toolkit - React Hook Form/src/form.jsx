import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';


function AppForm() {

    const { register , reset ,  handleSubmit , watch , formState: {errors , isSubmitting  } }  = useForm({
      mode: 'all'
    })


    async function formSubmit(data) {
      await new Promise((resolve , reject) => setTimeout(() => {
          resolve()
      }, 5000))
      console.log(data)
      reset()
    }

  return (
    <Form onSubmit={handleSubmit(formSubmit)}  >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control style={{boxShadow: 'none' , outline: 'none'}} className={errors.emailAddress ? 'error-input' : null} type="text" placeholder="name@example.com"   
        
        {...register('emailAddress' , {
          required: {
            value: true , 
            message: 'This field is required'
          },
          minLength: {
            value: 3 ,
            message: 'Min Length should be 3'
          },
          maxLength: {
            value: 25 ,
            message: 'Max Length should be 25'
          }
        } )}  />

        {errors.emailAddress && <p className='text-danger'> {errors.emailAddress.message} </p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="John" {...register('firstName')} />
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Doe" {...register('secondName')} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone Numbers</Form.Label>
        <Form.Control  type="text" placeholder="03212708233" {...register('phoneNumber')} />
      </Form.Group>

      <Form.Control type='submit' disabled={isSubmitting} style={{cursor: isSubmitting ? 'not-allowed' : 'pointer'}} value={isSubmitting ? 'Submitting ...' : 'Submit'} />
      
    </Form>
  );
}

export default AppForm;