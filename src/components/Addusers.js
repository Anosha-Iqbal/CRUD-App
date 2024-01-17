import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography,Box } from '@mui/material';
import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const Container = styled(FormGroup)`
    width: 40%;
    margin: 5% 0 0 25%;
    position: align-center;
    border: 2px solid black;
    padding: 10px;
  box-shadow: 6px 4px 8px -2px;
    `;

const AddUser = () => {

    
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4" style={{marginBottom: "10px"}}>Add User</Typography>
            <FormControl style={{marginBottom: "10px"}} >
                <InputLabel htmlFor="my-input" >Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl style={{marginBottom: "10px"}}>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl style={{marginBottom: "10px"}}>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
            <Box textAlign='center'>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
                </Box>
            </FormControl>

        </Container>
    )
}

export default AddUser;