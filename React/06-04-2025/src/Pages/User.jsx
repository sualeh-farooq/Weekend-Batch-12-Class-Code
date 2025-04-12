import { useEffect, useState } from "react"
import { getUsers  } from "../Utils/Users"
import Table from 'react-bootstrap/Table'
import { ToastContainer, toast , Bounce} from 'react-toastify';
import { Badge } from "react-bootstrap";


export default function Users(){
    const [isLoading , setIsLoading ] = useState(false)
    const [usersData , setUsersData] = useState([])

    useEffect(()=>{
        userDetails()
    }, [])

    const userDetails = async () =>{ 
        try {
            setIsLoading(true)
                const response = await getUsers()
                setUsersData(response.data)
                // if(!response.success) { // if success is false 

                // }

                if(response.success) {
                    toast.success(response.message)
                }
        } catch (error) {

        } finally {
                setIsLoading(false)
                
        }
    }


    const updateUserBadge = (userRole) =>{
        switch (userRole) {
            case 'worker':
                return (
                    <>
                    <Badge bg="primary">{userRole}</Badge>
                    </>
                )
                break;
                case 'manager':
                    return (
                        <>
                        <Badge bg="dark">{userRole}</Badge>
                        </>
                    )
                    break;
            default:
                break;
        }
    }
    return (
        <>
           <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

        {isLoading ? (
            <>
            <tr colspan={3} > Data is Loading .... </tr>
            </>
        ) : (

            usersData?.map((val , index)=>{
                return (
                    <>
                <tr>

                    <td> {val.id} </td>
                    <td> {val.name} </td>
                    <td> {val.email} </td>
                    <td>  {updateUserBadge(val.role)}  </td>
                    <td> some action </td>
                </tr>
                    </>
                )
            })
        )}
      </tbody>
    </Table>
    

    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>
        </>
    )
}