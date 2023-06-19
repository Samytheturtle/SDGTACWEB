import axios from 'axios';

const getAllBranchAxios = async () => {
    try{
        const {data: promise} = await axios.get('https://cuevas-api.onrender.com/sucursal/');
        return promise;
    }catch(error){
        return console.log(error)
    }
}

export default getAllBranchAxios;
