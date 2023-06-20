import getCategory from "../logic/CategoryAxios";
import getelementsbyId from "../logic/CategoriaAxios2";
import { getProductosAxios } from "../logic/ProductAxios2";


export  async function allcategorys(token){
    try{

    let array = [];
    let promise = getCategory(token);

    await promise.then(data => {
        console.log(data);
        array = data;
    });
    
    return array;

    }catch(error){
        console.log(error);
    }
}
export  async function categoryByid(id,token){
    try{

    let array = [];
    let promise = getelementsbyId(id, token);

    await promise.then(data => {
        console.log(data);
        array = data;
    });
    
    return array;

    }catch(error){
        console.log(error);
    }
}
export  async function getallproductos(token){
    try{

    let array = [];
    let promise = getProductosAxios(token);

    await promise.then(data => {
        console.log(data);
        array = data;
    });
    
    return array;

    }catch(error){
        console.log(error);
    }
}