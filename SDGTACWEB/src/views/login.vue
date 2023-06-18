<template>
  <div>
    <div class="Backgrountlogo">
      <img src="../assets/logo_cuevas.png" alt="Logo de la empresa" class="logo" />
    </div>
    <div class="contenido">
      <h1>Iniciar sesión</h1>
      <form>
        <div class="form-group">
          <label for="username">Usuario:</label>
          <input type="text" id="username" name="username" required v-model="username" />
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" name="password" required v-model="password" />
        </div>
      </form>
      <button @click="login">Iniciar Sesión</button>
      <button @click="register">Registrarse</button> 
    </div>
  </div>
</template>

<script>
//import postAuthAxios from '../logic/postAuthAxios'
import { ref } from 'vue'
import useLogin from '../viewModel/loginViewModel'

var respuesta = [];

  export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      
      const promise = useLogin(this.username, this.password);
      await promise.then(array => respuesta = array);

      //useLogin(this.username, this.password);
      //console.log(res);
      if(respuesta.message == "authenticated user"){
        
      //consume el servicio de login
      
          if(respuesta.tipoUsuario == 1 ){
            alert("tipo 1 - Admin");
            this.$router.push('/Admin-Main-Dash-Board')
          }else if(respuesta.tipoUsuario == 2){
            alert("tipo 2 - repartidor");
            //this.$router.push('/Employee-Main-Dash-Board')
          }else if(respuesta.tipoUsuario == 3){
            alert("tipo 3 - ejecutivo venta");
          
          }else{
            //alert("Usuario: " + this.username + "\nContraseña: " + this.password);
            // Redirige a la página de inicio de sesión exitosa
          
            this.$router.push('/Client-Main-Dash-Board');
          }
      }

      
      
    },
    register() {
      alert("Redirigiendo a la página de registro...");
      // Redirige a la página de registro
      this.$router.push('/Client-Register-Form');
    },
  },
};

</script>

<style>
body {
    font-family: Arial, sans-serif;
    background-color: #f7e1e1;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url("../assets/BackgrownLogin.jpg");
}
.logo {
    position: relative;
    width: 100%;
    max-width: 400px;
    display: flex;
}

.Backgrountlogo{
    position: fixed;
    top: 10%; 
    left: 50%; 
    transform: translateX(-50%);
    width: 50%; 
    max-width: 400px;
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}
h1 {
    font-weight: bold;
    text-align: center;
    color: black;
}
.contenido {
    position: fixed;
    width: 100%;
    top: 40%; 
    transform: translateX(-50%);
    max-width: 400px;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
}
form {
    margin-top: 20px;
}

.form-group {
    margin-bottom: 10px;
}

label {
    display: block;
    font-weight: bold;
    color: black;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    max-width: 400px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    border-color:#8b7a5e ;
}

button {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    background-color: #8b7a5e;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 10px;
    transition:  0.3s;
}

button:hover {
    background-color: #ffefd3 ;
}
</style>
