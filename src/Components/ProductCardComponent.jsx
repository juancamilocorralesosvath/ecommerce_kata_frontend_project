import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../styles/ProductCardComponent-style.css'
//GRACIAS PADRE, BENDITO Y ALABADO SEAS POR SIEMPRE!
const ProductCardComponent = ({name, img, desc, id, price}) => {
  return (
        <Link to={`/productsgallery/${id}`} style={{textDecoration:'none'}} >
      <Card className='product-card' >
        <CardImg className='product-img' top src={img} alt="Card image cap" />
        <CardBody className='product-card-body' >
          <CardTitle className='product-card-title' tag="h5">{name}</CardTitle>
          {/* <h6 className='product-card-subtitle' >price: ${price}</h6> */}
          <CardSubtitle className='product-card-subtitle' tag="h6" className="text-muted">price: ${price}</CardSubtitle>
          <p className='product-card-text' >{desc}</p>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Link>
  );
};

export default ProductCardComponent;