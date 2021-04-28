//import React from 'react';
import React from 'react';
import useForm from '../hooks/useForm';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Navbar from '../Components/Navbar/NavbarComponent';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../styles/Signup-style.css'; 
/* 
import Userfront from "@userfront/react";
Userfront.init("8nwr7pbw");
const LoginForm = Userfront.build({
    toolId: "rmadok"
  });
 
const Login = React.memo( ()=>{
    return <LoginForm/>
})
export default Login;  */ 

export default function Login(){
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
    }   =   useForm(sendForm,{})
        
        return(
        <>
            <Navbar></Navbar>
            <Form className='my-awesome-form' onSubmit={handleSubmit}>
            <h1>In order to buy, please Login to your account</h1>
                <FormGroup className='whats-inside' >
                    <Label for="email">Email</Label>
                    <Input type="email" required value={inputs.email} onChange={handleInputs} name="email" id="email" placeholder="example@example.com" />
                </FormGroup>
                <FormGroup className='whats-inside' >
                    <Label for="password">Password</Label>
                    <Input type="password" value={inputs.password} onChange={handleInputs} name="password" id="password" placeholder="SuperSecret1234" />
                </FormGroup>
                <Button className='user-items-btn' >login</Button>
                <p>Don't have an account with us? Signup now! it's super easy!</p>
                <Button onClick={()=>{
                    history.push('/signup')
                }} className='user-items-btn'>Singup</Button>
            </Form>
        </>
        )
}  