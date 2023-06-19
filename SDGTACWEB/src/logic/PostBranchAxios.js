import axios from "axios";

const postBranchAxios = async (data) => {
    try{
        console.log("Post desde Brach Axios");
        console.log(data);
        const {data: promise} = await axios.post('https://cuevas-api.onrender.com/sucursal/', data);
        return promise;
    }catch(error){
        return console.log(error)
    }
}

export default postBranchAxios;