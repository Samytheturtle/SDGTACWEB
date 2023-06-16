import axios from 'axios';

axios.defaults.headers['APIKEY'] = '7f5344118a163092ff2545447d8f7e64a79185c2';

const getMunicipalitiesAxios = async (id) => {
    try{
        const {data: promise} = await axios.get('/api/v1/municipios?id_estado=' + id);
        return promise;
    }catch(error){
        return console.log(error)
    }
}

export default getMunicipalitiesAxios