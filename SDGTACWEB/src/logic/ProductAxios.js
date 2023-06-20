//Añadir Producto Nuevo a la API

import axios from "axios";

const postProductAxios = async (data, token) => {  
    try{
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const {data: promise} = await axios.post('https://cuevas-api.onrender.com/producto/', data, token);
        return promise;

    }catch(error){
        return console.log(error)
    }
}



export default postProductAxios;