import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../styles/ProductCardComponent-style.css'
import noImageAvailable from './../Assets/images/no-image-available.png';
//GRACIAS PADRE, BENDITO Y ALABADO SEAS POR SIEMPRE!
const ProductCardComponent = ({name, img, desc, id, price}) => {
  //GLORIA A DIOS!
  if(!img){
    img = noImageAvailable;
  }
  return (
        <Link to={`/productsgallery/${id}`} style={{textDecoration:'none'}} >
      <Card className='product-card' >
        <CardImg className='product-img' top src={img} alt="Card image cap" />
        <CardBody className='product-card-body' >
          <CardTitle className='product-card-title' tag="h5">{name}</CardTitle>
          {/* <h6 className='product-card-subtitle' >price: ${price}</h6> */}
          {/* // eslint-disable-next-line */}
          <CardSubtitle className='product-card-subtitle text-muted' tag="h6">price: ${price}</CardSubtitle>
          <p className='product-card-text' >{desc}</p>
          <div className='product-card-btn-div' >
          <Button className='user-items-btn' >See more details</Button>
          </div>
        </CardBody>
      </Card>
      </Link>
  );
};

export default ProductCardComponent;