import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const Example = (props) => {
  return (
    <div style={{display:'flex', alignItems:'space-between' ,height:'15em', marginTop:'40px', marginBottom:'40px', width:'100%'}} >
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', }}>
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card>
      <Card body inverse color="primary" >
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body inverse color="success">
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
    </div>
  );
};

export default Example;