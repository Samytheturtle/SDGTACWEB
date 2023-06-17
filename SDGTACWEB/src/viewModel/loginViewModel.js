import postAuthAxios from "../logic/loginAxios";


export default async function useLogin(u, pass){
    var data = {
        nombreUsuario: u,
        contrasena: pass
    }
    ///convertir data a json
    data = JSON.stringify(data);
    console.log(data);
    alert(data);
    let array = [];
    let promise = postAuthAxios(data);

    await promise.then(data => {
        array = data.mensaje;
    });
    //alert(array);
    return array
}
