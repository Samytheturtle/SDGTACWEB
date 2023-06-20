import axios from "axios";

// consumir api de producto
// metodo post y con token
const postProductAxios = async (data, token) => {  
    try{
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const {data: promise} = await axios.post('https://cuevas-api.onrender.com/auth/login', data, token);
        return promise;

    }catch(error){
        return console.log(error)
    }
}



export default postProductAxios;