import axios from 'axios';

axios.defaults.headers['APIKEY'] = import.meta.env.VITE_APP_DIPOMEX;

const getStatesAxios = async () => {
    try{
        const {data: promise} = await axios.get('/api/v1/estados');
        return promise;
    }catch(error){
        return console.log(error)
    }
}

export default getStatesAxios