import axios from "axios";

// consumir api de producto
// metodo post y con token
export const getCategoryProductosAxios = async (id, token) => {  
    try{
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const {data: promise} = await axios.get('https://cuevas-api.onrender.com/categoria/producto/'+id, token);
        return promise;

    }catch(error){
        return console.log(error)
    }
}


export const getCategory = async (token) => {  
    try{
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const {data: promise} = await axios.get('https://cuevas-api.onrender.com/categoria/',token);
        return promise;

    }catch(error){
        return console.log(error)
    }
}