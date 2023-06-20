import getCategoryProductosAxios from "../logic/CategoryAxios";
import getCategory from "../logic/CategoryAxios";

 export async function categoriaProductos(id, token){
    try{

    let array = [];
    let promise = getCategoryProductosAxios(id, token);

    await promise.then(data => {
        console.log(data);
        array = data;
    });
    
    return array;

    }catch(error){
        console.log(error);
    }
}

export async function allcategorys(token){
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