import React from 'react';
//por que no lo puedo importar de la manera en que lo hace Mali?
import Navbar from '../Components/Navbar/indexNav';
import CarouselComponent from '../Components/Carousel/CarouselComponent';
import Announcements from '../Components/Announcements/Announcements';
export default function Home() {
    return(
        <>
            <Navbar/>
            <div className='container' style={{ boxShadow:'10px 10px 10px'}} >
                <CarouselComponent />
            </div>
            <div className='container' style={{width: '100%'}} >
                <Announcements/>
            </div>
            <h1>Bienvenidos a mi ecommerce!</h1>

        </>
    )
}