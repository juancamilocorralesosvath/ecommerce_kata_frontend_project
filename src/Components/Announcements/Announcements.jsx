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
        <CardTitle tag="h2" className='card-title my-title' >Confident Shopping</CardTitle>
        <CardTitle tag="h5" className='card-title' >renowned members</CardTitle>
        <img className='Announcement-img' src={secure} alt='secure-buying-logo' ></img>
      </Card>
      <Card body className='my-card-body' >
        <CardTitle tag="h2" className='card-title' >The Best products</CardTitle>
        <CardTitle tag="h5" className='card-title' >We offer the best quality</CardTitle>
        <img className='Announcement-img' src={trust} alt='trust-buying-logo' ></img>
      </Card>
      <Card body className='my-card-body' >
        <CardTitle tag="h2" className='card-title' >Secure payment</CardTitle>
        <CardTitle tag="h5" className='card-title' >state-of-the-art technology</CardTitle>
        <img className='Announcement-img' src={money} alt='guaranteed-buying-logo' ></img>
      </Card>
    </>
  );
};

export default Announcements;