//Obtener los Productos de un Carro

import axios from "axios";

export const getCartProductsAxios = async (id, token) => {  
    try{
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const {data: promise} = await axios.get('https://cuevas-api.onrender.com/carromain/carroProducto/'+id, config);
        return promise;

    }catch(error){
        return console.log(error)
    }
}