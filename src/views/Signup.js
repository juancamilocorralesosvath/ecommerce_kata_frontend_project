import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Navbar from '../Components/Navbar/indexNav';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import useForm from '../hooks/useForm';
import '../styles/Signup-style.css';
/* import Userfront from "@userfront/react";
Userfront.init("8nwr7pbw"); */

export default function Signup(){
    const history = useHistory();
    const sendForm = (inputs) => {
        console.log('ejecute sendForm! y estos son los inputs:', inputs);
        if(inputs.password === inputs.password_confirmation){
          //primero eliminamos la confirmacion de la contra, no queremos enviar eso al back
          delete inputs.password_confirmation;
          axios.post('https://ecomerce-master.herokuapp.com/api/v1/signup',inputs)
            .then(({data, status})=>{
              console.log('this is the data',data);
              console.log('this is the status',status);

              history.push('/')
            })
            .catch(error=>{
              console.error(error.response.data)
            })
        }else{
          alert('las contras no coinciden, que paso ahi (°_°)/');
        }
    };
    //ojo, que aqui como callback le estamos pasando a sendForm
    const {
        inputs, 
        handleInputs,
        handleSubmit,
    } = useForm(sendForm, {})
    // it seems like inside of a form, button achieves special
    //characteristics
    return(
        <>
        <Navbar />
        <Form onSubmit={handleSubmit} className='my-awesome-form' >
      <FormGroup className='whats-inside' >
        <Label for="email">Email</Label>
        <Input className='my-form-input' type="email" required value={inputs.email} onChange={handleInputs} name="email" id="email" placeholder="example@example.com" />
      </FormGroup>
      <FormGroup className='whats-inside' >
        <Label for="first_name">first name</Label>
        <Input className='my-form-input' type="text" value={inputs.first_name} onChange={handleInputs} name="first_name" id="first_name" placeholder="Jhon" />
      </FormGroup>
      <FormGroup className='whats-inside' >
        <Label for="last_name">last name</Label>
        <Input className='my-form-input' type="text" value={inputs.last_name} onChange={handleInputs} name="last_name" id="last_name" placeholder="Doe" />
      </FormGroup>
      <FormGroup className='whats-inside' >
        <Label for="password">Password</Label>
        <Input className='my-form-input' type="password" value={inputs.password} onChange={handleInputs} name="password" id="password" placeholder="SuperSecret1234" />
      </FormGroup>
      <FormGroup className='whats-inside' >
        <Label for="password_confirmation">Password Confirmation</Label>
        <Input className='my-form-input' type="password" value={inputs.password_confirmation} onChange={handleInputs} name="password_confirmation" id="password_confirmation" placeholder="" />
      </FormGroup>
      <FormGroup className='whats-inside' >
        <Label for="user_type">type of user</Label>
        <Input className='my-form-input' type="text" value={inputs.user_type} onChange={handleInputs} name="user_type" id="role" placeholder="CUSTOMER or ADMIN" />
      </FormGroup>
      <Button className='user-items-btn' >Submit</Button>
    </Form>
    {/* <Demo /> */}
    </>
    )
}
/* 
const SignupForm = Userfront.build({
  toolId: "oarndk"
});

class Demo extends React.Component {
  render () {
    return <SignupForm />
  }
} */