import { useState } from 'react';
export default function useForm(callback, defaults){ 
    const [inputs, setInputs] = useState(defaults);
    const handleInputs = (event) => {
        console.log('this is the event:', event.target.value)
        console.log('this is its id:', event.target.id)
        //ojo pues a lo que esta pasando: me traigo todas las propiedades que ya tenia de los inputs, y ahora a ese objeto previo, le agrego el valor que recibo desde el input, y el nombre de la propieda es el id del target
        setInputs({
            ...inputs,
            [event.target.id]: event.target.value,
        });
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        // console.log(inputs)
        //console.log(callback)
        callback(inputs)
    }
    return{
        inputs,
        handleInputs,
        handleSubmit,
    };
}