import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Navbar from '../Components/Navbar/indexNav';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import useForm from '../hooks/useForm';
import Userfront from "@userfront/react";
Userfront.init("8nwr7pbw");

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
        <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" required value={inputs.email} onChange={handleInputs} name="email" id="email" placeholder="email" />
      </FormGroup>
      <FormGroup>
        <Label for="first_name">first name</Label>
        <Input type="text" value={inputs.first_name} onChange={handleInputs} name="first_name" id="first_name" placeholder="first name" />
      </FormGroup>
      <FormGroup>
        <Label for="last_name">last name</Label>
        <Input type="text" value={inputs.last_name} onChange={handleInputs} name="last_name" id="last_name" placeholder="last name" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" value={inputs.password} onChange={handleInputs} name="password" id="password" placeholder="password" />
      </FormGroup>
      <FormGroup>
        <Label for="password_confirmation">Password</Label>
        <Input type="password" value={inputs.password_confirmation} onChange={handleInputs} name="password_confirmation" id="password_confirmation" placeholder="password confirmation" />
      </FormGroup>
      <FormGroup>
        <Label for="user_type">type of user</Label>
        <Input type="text" value={inputs.user_type} onChange={handleInputs} name="user_type" id="role" placeholder="e.g: CUSTOMER or ADMIN" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    <Demo />
    </>
    )
}

const SignupForm = Userfront.build({
  toolId: "oarndk"
});

class Demo extends React.Component {
  render () {
    return <SignupForm />
  }
}