import React from 'react';
import useForm from '../hooks/useForm';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Navbar from '../Components/Navbar/indexNav';

export default function Login(){
    const history = useHistory();
    const sendForm = (inputs) => {
        console.log('ejecute el sendForm desde el login!', inputs);
        axios.post('i still dont know where to send this', inputs)
            .then(({data, status})=>{
                const { token } = data;
                window.localStorage.setItem('token', token);
                //que es lo que estamos anadiendo a la memoria del historial?
                //porque no le ponemos un nombre como '/user'?
                history.push('/');
            })
            .catch(error=>{
                console.error(error.response.data)
            })
    };
    const {
        inputs, 
        handleInputs,
        handleSubmit,
    }   =   useForm(sendForm,
            {
                email: 'mali@devf.mx',
                password: 'gatitos59'
            }
        )
        return(
            <>
            <Navbar />
            <Form onSubmit={handleSubmit}>
        <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" required value={inputs.email} onChange={handleInputs} name="email" id="email" placeholder="email" />
        </FormGroup>
        <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" value={inputs.password} onChange={handleInputs} name="password" id="password" placeholder="password" />
        </FormGroup>
        <Button>Submit</Button>
        </Form>
    </>
        )
}