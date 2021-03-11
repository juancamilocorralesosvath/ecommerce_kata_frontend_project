import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
//GRACIAS PADRE, BENDITO Y ALABADO SEAS POR SIEMPRE!
const ProductCardComponent = ({name, img, desc, id}) => {
  return (
    <div>
        <Link to={`/productsgallery/${id}`} style={{textDecoration:'none'}} >
      <Card>
        <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>{desc}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Link>
    </div>
  );
};

export default ProductCardComponent;