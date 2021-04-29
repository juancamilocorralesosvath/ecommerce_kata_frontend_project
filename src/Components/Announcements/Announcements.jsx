import React from 'react';
import { Card,CardTitle } from 'reactstrap';
import trust from '../../Assets/SVG/trust.svg'
import secure from '../../Assets/SVG/secure-shopping.svg'
import money from '../../Assets/SVG/money.svg'
import './Announcements.css'


const Announcements = (props) => {
  return (
      <>
      <Card body className='my-card-body' >
        <CardTitle tag="h2" className='card-title' >Shop with confidence</CardTitle>
        <CardTitle tag="h5" className='card-title' >all of our partners are renowned buyers</CardTitle>
        <img src={secure} alt='secure-buying-logo' ></img>
      </Card>
      <Card body className='my-card-body' >
        <CardTitle tag="h2" className='card-title' >Best products in the market</CardTitle>
        <CardTitle tag="h5" className='card-title' >We offer the best quality</CardTitle>
        <img src={trust} alt='trust-buying-logo' ></img>
      </Card>
      <Card body className='my-card-body' >
        <CardTitle tag="h2" className='card-title' >Secure payment method</CardTitle>
        <CardTitle tag="h5" className='card-title' >We use state-of-the-art technology</CardTitle>
        <img src={money} alt='guaranteed-buying-logo' ></img>
      </Card>
    </>
  );
};

export default Announcements;