import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Navbar from '../Components/Navbar/indexNav';

export default function Quote() {
    const history = useHistory();

    const [quote, setQuote] = useState({});
    //le estamos diciendo que se ejecute solo una vez, cuando se renderize
    useEffect(()=>{
        //una vez que nos aseguramos de que el token existe, hacemos la petiticion con la cabecera de configuracion
        //nos aseguramos de que montamos el componenete solamente si estamos autenticados.
        const token = window.localStorage.getItem('token');
        if(token){
            /* const config = {
                headers:{
                    'Authorization': `JWT ${token}`
                } 
            };*/
            axios.get('https://pokeapi.co/api/v2/pokemon/')
                .then(({data, status})=>{
                    console.log(status)
                    setQuote(data);
                })
                .catch(error=>{
                    console.error(error.response.data);
                })
        }else{
            history.push('/');
        }
    }, []);
    return(
        <>
        <Navbar />
        <div className='container' >
            {
                quote.sprites
                ?    <div className='row'>
                <h2>{quote.name}</h2>
                <span>{quote.id}</span>
                <img src={quote.sprites.back_default} ></img>
                <img src={quote.sprites.front_default} ></img>
                </div>
                : <h1>estamos teniendo problemas en la guarderia para traer tu pokemon...</h1>
        
            }
        </div>
        </>
    )
}