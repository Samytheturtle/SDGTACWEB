import axios from "axios";

const postAddressAxios = async (data, token) => {
    try{
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const {data: promise} = await axios.post('https://cuevas-api.onrender.com/domicilio/', data, config);
        return promise;
    }catch(error){
        return console.log(error)
    }
}

export default postAddressAxios;