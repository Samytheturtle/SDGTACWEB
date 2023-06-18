import axios from "axios";

const postPaymentMethodAxios = async (data) => {
    try{
        console.log("Desde PaymentMethod Axios");
        console.log(data);
        const {data: promise} = await axios.post('https://cuevas-api.onrender.com/metodopago/', data);
        return promise;
    }catch(error){
        return console.log(error)
    }
}

export default postPaymentMethodAxios;