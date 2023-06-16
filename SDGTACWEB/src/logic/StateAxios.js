import axios from 'axios';

axios.defaults.headers['APIKEY'] = '7f5344118a163092ff2545447d8f7e64a79185c2';

const getStatesAxios = async () => {
    try{
        const {data: promise} = await axios.get('/api/v1/estados');
        return promise;
    }catch(error){
        return console.log(error)
    }
}

export default getStatesAxios