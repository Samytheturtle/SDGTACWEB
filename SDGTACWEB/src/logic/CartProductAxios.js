//Obtener los Productos de un Carro

import axios from "axios";

export const getCartProductsAxios = async (idCarro, token) => {  
    try{
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const {data: promise} = await axios.get('https://cuevas-api.onrender.com/carromain/carroProducto/'+idCarro, token);
        return promise;

    }catch(error){
        return console.log(error)
    }
}