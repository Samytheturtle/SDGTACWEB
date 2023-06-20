//Añadir Productos al Carrito
import axios from "axios";

export const postAddProductInCartAxios = async (data, token) => {  
    try{
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const {data: promise} = await axios.post('https://cuevas-api.onrender.com/carromain/addCar', data, token);
        return promise;

    }catch(error){
        return console.log(error)
    }
}
