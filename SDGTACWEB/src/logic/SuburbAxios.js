import axios from 'axios';

axios.defaults.headers['APIKEY'] = '7f5344118a163092ff2545447d8f7e64a79185c2';

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