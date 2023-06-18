import axios from 'axios';

axios.defaults.headers['APIKEY'] = import.meta.env.VITE_APP_DIPOMEX;

const getMunicipalitiesAxios = async (id) => {
    try{
        const {data: promise} = await axios.get('/api/v1/municipios?id_estado=' + id);
        return promise;
    }catch(error){
        return console.log(error)
    }
}

export default getMunicipalitiesAxios