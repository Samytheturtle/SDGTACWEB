import axios from "axios";

export const getProductosAxios = async (id, token) => {  
    try{
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const {data: promise} = await axios.get('https://cuevas-api.onrender.com/producto/', token);
        return promise;

    }catch(error){
        return console.log(error)
    }
}