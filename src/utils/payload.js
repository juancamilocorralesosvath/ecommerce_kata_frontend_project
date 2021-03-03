//recuerda que payload es la parte que justo necesitamos
//ni siquiera necesitamos ponerle nombre, se lo podemos poner en el archivo en el que la invoquemos/importemos
export default function payload() {
    //nos traemos el token
    const token = window.localStorage.getItem('token');
    //si el token existe, hacemos lo necesario para poder leer lo que viene dentro del token
    if(token){
        // porque? porque el JWT viene en tres partes, cada una de ellas separadas por un punto
        const [header, payload, signature] = token.split('.');
        console.log(header, signature)
        //el payload es un objeto
        const base64 = payload.replace('+','-').replace('/','_');
        const payloadObject = JSON.parse(window.atob(base64));
        return payloadObject;
    }else{
        return null;
    }
}