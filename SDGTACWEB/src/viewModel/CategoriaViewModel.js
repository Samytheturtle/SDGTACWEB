import getCategory from "../logic/CategoryAxios";
import getelementsbyId from "../logic/CategoryAxios2";

export default async function allcategorys(token){
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
export default async function categoryByid(id,token){
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