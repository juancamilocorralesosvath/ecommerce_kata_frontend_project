import React from 'react';
//por que no lo puedo importar de la manera en que lo hace Mali?
import Navbar from '../Components/Navbar/indexNav';
export default function Home() {
    return(
        <>
            <Navbar/>
            <h1>Bienvenidos a mi ecommerce!</h1>
        </>
    )
}