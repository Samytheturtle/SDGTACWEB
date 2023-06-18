import postAuthAxios from "../logic/loginAxios";


export default async function useLogin(u, pass){
    try{
    //validar si u es nombre de usuario o telefono
    //si es nombre de usuario se envia dataUsu, si es telefono se envia dataTel
    //u es string
    
    alert(u.length);
    if (u.length == 10){
        var data = {
            telefono: u,
            contrasena: pass
        }
    }else{
        var data = {
            nombreUsuario: u,
            contrasena: pass
        }
    }
   
    ///convertir data a json
    //data = JSON.stringify(data);
    //console.log(data);
    //alert(data);
    let array = [];
    let promise = postAuthAxios(data);

    await promise.then(data => {
        console.log(data);
        array = data;
    });
    
    return array;

    }catch(error){
        console.log(error);
    }
}
