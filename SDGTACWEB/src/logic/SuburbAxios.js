import axios from 'axios';

axios.defaults.headers['APIKEY'] = import.meta.env.VITE_APP_DIPOMEX;

const getSuburbsAxios = async (municipality) => {
    try{
        const {data: promise} = await axios.get('/api/v1/colonias?id_estado=' + 
        municipality.ESTADO_ID + '&id_mun=' + municipality.MUNICIPIO_ID);
        return promise;
    }catch(error){
        return console.log(error)
    }
}

export default getSuburbsAxios