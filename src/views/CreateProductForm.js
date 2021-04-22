import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Navbar from '../Components/Navbar/indexNav';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import useForm from '../hooks/useForm';
import '../styles/Signup-style.css'
export default function CreateProductForm(){
    const history = useHistory();
  
    const sendProduct = (inputs) => {
        const randomSkuGenerator = () => {
            const arrayOfLetters= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            let min= 1800;
            let max = 3500;
            return `${Math.floor( Math.random() * (max-min)+min)}${arrayOfLetters[Math.floor(Math.random()*arrayOfLetters.length-1)]}`;
        }
        const token = window.localStorage.getItem('token');
        if(token){
            console.log(token)
            let skuValue = randomSkuGenerator();
            console.log("let's see how good we are at encrypting hehe, sku value generated was:", skuValue);
           /*  const config = {
                headers:{
                    'Authorization': `JWT ${token}`,
                },
                data:{
                    ...inputs,
                    'sku': skuValue,
                }
            } */
            console.log('ejecute sendProduct! y esto fue lo que le envie al back:', {
                ...inputs,
                'sku': skuValue,
                headers:{
                  'Authorization': `JWT ${token}`,
              },
              });
          axios.post('https://ecomerce-master.herokuapp.com/api/v1/item', {
              ...inputs,
              'sku': skuValue,
            },{
                headers:{
                    'Authorization': `JWT ${token}`
                }
            })
            .then(({data, status})=>{
              console.log(data,status);
              //no entiendo que es lo que esta agregando aqui🤔
              //ahora si, esta haciendo como un redirect, con este history.push('/')
              //estamos indicando que queremos que se nos redireccione al home
              history.push('/')
            })
            .catch(error=>{
              console.error(error.response.data)
            })
        }        
    };
    //ojo, que aqui como callback le estamos pasando a sendForm
    const {
        inputs, 
        handleInputs,
        handleSubmit,
    } = useForm(sendProduct, {})
    // it seems like inside of a form, button achieves special
    //characteristics
    return(
        <>
        <Navbar />
        <Form className='my-awesome-form' onSubmit={handleSubmit}>
        <h1>Fill the info for creating a new product</h1>
        <FormGroup className='whats-inside' >
            <Label for="product name">Product name</Label>
            <Input className='my-form-input' type="text" required value={inputs.product_name} onChange={handleInputs} name="product name" id="product_name" placeholder="e.g: Computer" />
        </FormGroup>
        <FormGroup className='whats-inside' >
            <Label for="product description">product description</Label>
            <Input className='my-form-input' type="text" value={inputs.product_description} onChange={handleInputs} name="product description" id="product_description" placeholder="write in here all the details of your product" />
        </FormGroup>
        <FormGroup className='whats-inside' >
            <Label for="price">price</Label>
            <Input className='my-form-input' type="number" value={inputs.price} onChange={handleInputs} name="price" id="price" placeholder="e.g: 1234" />
        </FormGroup>
        <FormGroup className='whats-inside' >
            <Label for="category">category</Label>
            <Input className='my-form-input' type="text" value={inputs.category} onChange={handleInputs} name="category" id="category" placeholder="e.g: Books" />
        </FormGroup>
        <FormGroup className='whats-inside' >
            <Label for="brand">brand</Label>
            <Input className='my-form-input' type="text" value={inputs.brand} onChange={handleInputs} name="brand" id="brand" placeholder="e.g: Microsoft" />
        </FormGroup>
        <FormGroup className='whats-inside' >
            <Label for="image">image link</Label>
            <Input className='my-form-input' type="text" value={inputs.image} onChange={handleInputs} name="image" id="image" placeholder="place here the link of your image" />
        </FormGroup>
      <Button className='user-items-btn' >Submit</Button>
    </Form>
    </>
    )
}

/* 
    just in case:
        admitted categories:
                        "Books",
                        "Movies",
                        "Music",
                        "Games",
                        "Electronics",
                        "Computers",
                        "Home",
                        "Garden",
                        "Tools",
                        "Grocery",
                        "Health",
                        "Beauty",
                        "Toys",
                        "Kids",
                        "Baby",
                        "Clothing",
                        "Shoes",
                        "Jewelery",
                        "Sports",
                        "Outdoors",
                        "Automotive",
                        "Industrial"
    although if you think about it... we should display this options to the user...
*/