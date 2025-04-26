import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { Badge } from 'react-bootstrap';

export default function HookForm() {


    const userSchema = yup.object({
        email: yup.string().email('Invalid Email Address').required('Email is required'),
        firstName: yup.string().required('First Name is required'),
        lastName: yup.string().required('Last Name is required'),
        phoneNumber: yup.string().matches(/((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/ , 'Invalid Phone Number').required('Phone Number is required'),      
        gender: yup.string().required('Gender is required'),
        password: yup.string().min(8 , 'Password should be atleast 8 characters').required('Password is required'),
        confirmPassword: yup.string().oneOf([yup.ref('password')] , 'Password Do not match'),
        interests: yup.array().min(1 , 'Select atleast 1 Interest') 
    })

    const {register , watch , handleSubmit , formState: {errors , isSubmitting} } = useForm({
        mode: 'all',
        resolver: yupResolver(userSchema),
        defaultValues: {
            email: '',
            interests: []
        }
    }) 


    const formInterests = ['Cricket', 'Basketball', 'Futsal', 'Hockey']

    function handleForm(data) {
        console.log(data)
    }
    return (
        <>

            <Form onSubmit={handleSubmit(handleForm)} >

                {watch('email').includes('smit') ? <Badge  bg='success'>You are eligible for this discount</Badge> : null}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  style={{ border: errors.email ? '1px solid red' : '1px solid black' ,  outline: 'none' , boxShadow: 'none'}}  {...register('email' )} type="email" placeholder="name@example.com" />
               
                    {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control   style={{ border: errors.firstName ? '1px solid red' : '1px solid black' ,  outline: 'none' , boxShadow: 'none'}}  {...register('firstName')} type="text" placeholder="John" />
               
                    {errors.firstName && <span className='text-danger'>{errors.firstName.message}</span>}
               
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control  style={{  border: errors.lastName ? '1px solid red' : '1px solid black' , outline: 'none' , boxShadow: 'none'}}   {...register('lastName')} type="text" placeholder="Henry" />
               
                    {errors.lastName && <span className='text-danger'>{errors.lastName.message}</span>}
               
                </Form.Group>



                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control  style={  {  border: errors.phoneNumber ? '1px solid red' : '1px solid black' , outline: 'none' , boxShadow: 'none'}}  {...register('phoneNumber')} type="text" placeholder="03212708233" />
               
                    {errors.phoneNumber && <span className='text-danger'>{errors.phoneNumber.message}</span>}
               
               </Form.Group>



                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select style={  {  border: errors.gender ? '1px solid red' : '1px solid black' , outline: 'none' , boxShadow: 'none'}} {...register('gender')}  aria-label="Default select example">
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </Form.Select>

                    {errors.gender && <span className='text-danger'>{errors.gender.message}</span>}


                </Form.Group>



                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  style={{     border: errors.password ? '1px solid red' : '1px solid black' , outline: 'none' , boxShadow: 'none'}}  {...register('password')} type="password" placeholder="**********" />
              
                    {errors.password && <span className='text-danger'>{errors.password.message}</span>}
              
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control  style={{  border: errors.confirmPassword ? '1px solid red' : '1px solid black' , outline: 'none' , boxShadow: 'none'}}   {...register('confirmPassword')} type="password" placeholder="**********" />
                    {errors.confirmPassword && <span className='text-danger'>{errors.confirmPassword.message}</span>}
               
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Interests</Form.Label>
                    {formInterests.map((sport) => (
                        <Form.Check
                            value={sport}
                            label={sport}
                            key={sport}
                            name="group1"
                            type="checkbox"
                            id={sport}
                            {...register('interests')}
                        />
                    ))}

                    {errors.interests && <span className='text-danger' >{errors.interests.message}</span>}
                </Form.Group>



                <Form.Control  style={{outline: 'none' , boxShadow: 'none'}}  type='submit' />




            </Form>


        </>
    )
}