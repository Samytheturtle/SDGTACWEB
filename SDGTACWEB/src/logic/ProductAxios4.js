//Quitar Productos del Carrito
import axios from "axios";

export const postQuitProductInCartAxios = async (data, token) => {  
    try{
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const {data: promise} = await axios.post('https://cuevas-api.onrender.com/carromain/quitCar', data, token);
        return promise;

    }catch(error){
        return console.log(error)
    }
}
