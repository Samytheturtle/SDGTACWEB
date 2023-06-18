import axios from "axios";

const postAddressAxios = async (data) => {
    try{
        console.log("Desde Address Axios");
        console.log(data);
        const {data: promise} = await axios.post('https://cuevas-api.onrender.com/domicilio/', data);
        return promise;
    }catch(error){
        return console.log(error)
    }
}

export default postAddressAxios;