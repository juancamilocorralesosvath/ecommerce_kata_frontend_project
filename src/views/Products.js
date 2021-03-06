
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { useHistory } from 'react-router-dom';
import Navbar from '../Components/Navbar/indexNav';
import ProductCardComponent from '../Components/ProductCardComponent';
import './../styles/Products-style.css';
import { CardColumns } from 'reactstrap';
import SpinnerComponent from '../Components/Spinner';

export default function Products() {
  //  const history = useHistory();
    const [products, setProducts] = useState([]);

    const petitionToAPI = async () =>{
        try{
            let response = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item');
            setProducts(response.data);
            console.log(response.data)
        }catch(error){
            alert('courrio un error al traer los productos!');
        }
    }
    //le estamos diciendo que se ejecute solo una vez, cuando se renderize
    useEffect(()=>{
      setTimeout(petitionToAPI,500)
    },[]);
   /*  const showProducts = (productsList) => {
       let listOfProducts = productsList.map(product=>{
           return <div>
                <h2>{product.name}</h2>
                <span>{product.id}</span>
            </div>
        })
        console.log('products from my function:',listOfProducts);
        return listOfProducts;
    } */
    /*  products.map(product=>{
                    return <div>
                         <h2>{product.product_name}</h2>
                         <span>{product.description}</span>
                     </div>
                 }) */
    return(
        <>
        <Navbar />
        {/* this makes the magic */}
        <main className='products-gallery' >
        <CardColumns>
            {
               products
               ? products.map(product=> 
               <ProductCardComponent
               key={product._id} 
               name={product.product_name} 
               desc={product.description}
               id={product._id} 
               img={product.image} 
               price={product.price}/>
               )
               :<h1>Lo sentimos mucho, hubo un problema en el stock</h1>      
            }
        </CardColumns>
        </main>
        <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', height:'50vh'}}>
            <SpinnerComponent color='primary' ></SpinnerComponent>
        </div>
        </>
    )
}