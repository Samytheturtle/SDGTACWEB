<template>
    <div class="contentFormReporte">
      <h1 class="tituloReporteForm">Reportar un Incidente</h1>
      <form @submit.prevent="submitReport">

        <div class="container">
            <label for="idorden">Número de la Orden (ID):</label>
            <span id="idorden">10</span> <!--Aqui va el ID de la orden que se seleccionó para realizar el reporte-->
        </div>
        <div class="container">
            <label for="fecha">Fecha de la orden:</label>
            <span id="fecha">12 de Junio del 2023</span> <!--La fecha se obtiene de la información de la orden seleccionada para reportar-->
        </div>
        <br>
        <div align-items="left">
          <label for="descripcion">Escribe aquí la descripción detallada del incidente:</label>
          <textarea id="descripcion" v-model="descripcion" rows="4" cols="50"></textarea>
        </div>
        <table class="tablaReporte">
            <tr>
                <td><label for="foto">Fotografía de Evidencia:</label></td>
                <td><input type="file" id="foto" @change="handleFileUpload"></td>
            </tr>
        </table>
        <button type="submit">Enviar Reporte</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
        //Se guardarán 4 datos en la tabla Reporte de la BD:
        //El id de la Orden de la cual se está reportando incidente
        //El id del usuario que esta registrando la orden, sea repartidor o cliente
        //La descripción el reporte
        //La imagen convertida a BLOB (Base64)
    data() {
      return {
        descripcion: '',
        foto: null
      };
    },
    methods: {
        handleFileUpload(event) {
        const file = event.target.files[0];
        
        // Verificar tamaño del archivo
        if (file.size > 5 * 1024 * 1024) {
            alert("El archivo excede el límite de tamaño de 5 megabytes.");
            this.resetFileInput();
            return;
        }
        
        // Verificar si es una imagen
        if (!file.type.startsWith("image/")) {
            alert("El archivo seleccionado no es una imagen.");
            this.resetFileInput();
            return;
        }
        
        // Convertir imagen a base64
        const reader = new FileReader();
        reader.onload = () => {
        const base64Data = reader.result.split(",")[1];
        
        // Aquí puedes realizar acciones adicionales con el dato base64,
        // como enviarlo al servidor o mostrarlo en la interfaz de usuario.
        
        console.log("Imagen convertida a base64:", base64Data);
      };
      reader.readAsDataURL(file);
    },
    submitReport() {
        //Se guardarán 4 datos en la tabla Reporte de la BD:
        //El id de la Orden de la cual se está reportando incidente
        //El id del usuario que esta registrando la orden, sea repartidor o cliente
        //La descripción el reporte
        //La imagen convertida a BLOB (Base64)

        // Aquí puedes agregar la lógica para enviar el reporte y la foto al servidor
        // por medio de una solicitud HTTP utilizando una librería como Axios o fetch
        // Puedes acceder a la descripción con this.descripcion y a la foto con this.foto
        // Ejemplo:
        const formData = new FormData();
        formData.append('descripcion', this.descripcion);
        formData.append('foto', this.foto);
        // Luego puedes enviar formData al servidor utilizando Axios, fetch u otra librería
        // axios.post('/api/report', formData)
        //   .then(response => {
        //     // Lógica para manejar la respuesta del servidor
        //   })
        //   .catch(error => {
        //     // Lógica para manejar errores
        //   });
      }
    }
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

.container {
  display: flex;
  align-items: center;
}

.container label {
  margin-right: 10px;
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

}

.contentFormReporte{
    margin-top: 20px;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

}

.tituloReporteForm {
    text-align: center;
    color: black;
    size: 25px;
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
  