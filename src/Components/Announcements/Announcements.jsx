import React from 'react';
import { Card,CardTitle } from 'reactstrap';
import trust from '../../Assets/SVG/trust.svg'
import secure from '../../Assets/SVG/secure-shopping.svg'
import guaranteed from '../../Assets/SVG/guaranteed.svg'


const Example = (props) => {
  return (
    <div style={{display:'flex', alignItems:'space-between' ,height:'15em', marginTop:'40px', marginBottom:'40px', width:'100%'}} >
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', }}>
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <img src={secure} style={{height:'30px', width:'30px'}} ></img>

      </Card>
      <Card body inverse color="primary" >
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <img src={trust} ></img>

      </Card>
      <Card body inverse color="success">
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <img src={guaranteed} ></img>
      </Card>
    </div>
  );
};

export default Example;