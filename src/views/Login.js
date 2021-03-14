import React, { useEffect, useState } from 'react';
import useForm from '../hooks/useForm';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Navbar from '../Components/Navbar/indexNav';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import Userfront from "@userfront/react";
Userfront.init("8nwr7pbw");
const LoginForm = Userfront.build({
    toolId: "rmadok"
  });
 
const Login = React.memo( ()=>{
    return <LoginForm/>
})
export default Login;  
 
/* export default function Login(){
    const history = useHistory();
    const sendForm = (inputs) => {
        console.log('ejecute el sendForm desde el login!', inputs);
        axios.post('https://ecomerce-master.herokuapp.com/api/v1/login', inputs)
            .then(({data, status})=>{
                console.log("response status is:",status);
                const { token } = data;
                console.log(data)
                window.localStorage.setItem('token', token);
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
}  */