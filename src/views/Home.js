import React from 'react';
import { Link } from 'react-router-dom';
//por que no lo puedo importar de la manera en que lo hace Mali?
import Navbar from '../Components/Navbar/indexNav';
import CarouselComponent from '../Components/Carousel/CarouselComponent';
import Announcements from '../Components/Announcements/Announcements';
import '../styles/Home-style.css'
export default function Home() {
    return(
        <>
            <Navbar/>
            <main className='main' >
            <div className='carousel-container' style={{ boxShadow:'10px 10px 10px'}} >
                <CarouselComponent />
            </div>
            <article className='announcements-container' >
                <Announcements/>
            </article>
            </main>
            <footer>
            <Link to='productsgallery' >
            <h1 style={{textAlign:'center'}} >Ready to buy?</h1>
            </Link>
            </footer>
        </>
    )
}