import axios from "axios";

const postUserAxios = async (data) => {
    try{
        console.log("Desde User Axios");
        console.log(data);
        const {data: promise} = await axios.post('https://cuevas-api.onrender.com/usuario/', data);
        return promise;
    }catch(error){
        return console.log(error)
    }
}

export default postUserAxios;