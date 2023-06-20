import axios from "axios";

// consumir api de producto
// metodo post y con token

const getCategoryById = async (id, token) => {  
    try{
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const {data: promise} = await axios.get('https://cuevas-api.onrender.com/categoria/producto/'+id,config);
        return promise;

    }catch(error){
        return console.log(error)
    }
}
export default getCategoryById;
