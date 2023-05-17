import { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { addUser } from '../slices/userSlice'

const ComponentA = () => {
    const dispatch = useDispatch()

    const [user, setUser] = useState({
        id: 1,
        name: '',
        email: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted Values: ", user)
        dispatch(addUser(user))
    }

    const handleChange = (event) => {
        setUser((prevUser) => ({ ...prevUser, [event.target.name]: event.target.value }))
    }
    return (<>
        <div className="col">
            <div className=' p-3 border border-2 border-dark rounded'>
                <h1 className='mb-3 text-center'>Component A</h1>
                <h3 className="text-center">Add User</h3>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="userID">
                            User ID
                        </Label>
                        <Input
                            id="userID"
                            name="id"
                            placeholder="User ID"
                            type="number"
                            value={user.id}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="userName">
                            User Name
                        </Label>
                        <Input
                            id="userName"
                            name="name"
                            placeholder="User Name"
                            type="text"
                            value={user.name}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="userEmail">
                            User Email
                        </Label>
                        <Input
                            id="userEmail"
                            name="email"
                            placeholder="User Email"
                            type="text"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <Button className='d-block mx-auto' color='primary' outline>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    </>);
}

export default ComponentA;