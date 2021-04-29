import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar/indexNav';
import BuyModal from '../Components/Modals/BuyModal';
import '../styles/IndividualProductPage-style.css'

//GRACIAS PADRE, BENDITO Y ALABADO SEAS POR SIEMPRE!
const ProductCardComponent = () => {
    //const modal = <BuyModal></BuyModal>;
    const [product, setProduct] = useState({});
    //aqui obtengo la informacion desde la URL
    const {idProduct} = useParams();
    const petitionToAPI = async () =>{
        try{
            let response = await axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item/${idProduct}`);
            setProduct(response.data);
        }catch(error){
            alert('courrio un error al traer los productos!');
        }
    }
    const tokenValidation = () => {
        let response = '';
        const token = window.localStorage.getItem('token');
        if(token){
          //history.push('/successful');
          response = <h1>great! you are logged in!</h1>
        }else{
          //history.push('/login');
          response = <h1>oops! I'm sorry cowboy! but I'm afraid you'll need to log in or create an account...</h1>

        }
        return response;
    }
    useEffect(()=>{
        petitionToAPI();
    // eslint-disable-next-line
      },[]);
      const myAwesomeAndOriginalButton = <button className='user-items-btn' style={{color:'white'}} >
      Buy
      </button>;
  return (
    <>
    <Navbar/>
    <div className='individual-product-info' >
      <img id='product-img' src={product.image} alt='the product that you are about to buy' ></img>
      <div className='title-and-description' >
        <h1>{product.product_name}</h1>
        <p>{product.description}</p>
      </div>
      <h2>Price: ${product.price}</h2>
      {/* onClick={tokenValidation} */}
      {/* thanks Maui! */}
      <BuyModal buttonLabel={myAwesomeAndOriginalButton} title={tokenValidation()} >
        <h1>Hello world</h1>
      </BuyModal>
    </div>
    </>
  );
};

export default ProductCardComponent;