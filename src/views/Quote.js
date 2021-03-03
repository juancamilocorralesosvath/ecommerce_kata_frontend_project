import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Quote() {
    const [quote, setQuote] = useState({});
    //le estamos diciendo que se ejecute solo una vez, cuando se renderize
    useEffect(()=>{
        const token = window.localStorage.getItem('token');
        if(token){
            const config = {};
            axios.get('url', config)
                .then(({data, status})=>{
                    setQuote(data);
                })
        }
    }, []);
    return(
        <div className='container' >
            <div className='row'>
                <h2>{quote.quotes}</h2>
                <span>{quote.source}</span>
            </div>
        </div>
    )
}