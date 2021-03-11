import React,{ useState, useEffect } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
//GRACIAS PADRE, BENDITO Y ALABADO SEAS POR SIEMPRE!
const ProductCardComponent = () => {
    const history = useHistory();
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
        const token = window.localStorage.getItem('token');
        if(token){
            history.push('/successful');
        }else{
            history.push('/failed');
        }
    }
    useEffect(()=>{
        petitionToAPI();
      },[]);
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={product.image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{product.product_name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>{product.description}</CardText>
          <Button onClick={tokenValidation} >I want it!</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCardComponent;