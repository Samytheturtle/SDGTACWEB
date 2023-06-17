import axios from "axios";

const postAuthAxios = async (data) => {
    try{
        const {data: promise} = await axios.post('https://cuevas-api.onrender.com/auth/login', data);
        return promise;
    }catch(error){
        return console.log(error)
    }
}



export default postAuthAxios;