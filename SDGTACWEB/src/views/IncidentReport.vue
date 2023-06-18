<template>
  <div class="contentFormReporte">
    <h1>Reporte de Incidentes</h1>
    <form @submit.prevent="submitReport">
      <label for="idOrden">ID de la orden:</label>
      <span id="idorden">10</span> <!--Aqui va el ID de la orden que se seleccionó para realizar el reporte-->

      <label for="fechaOrden">Fecha de la orden:</label>
      <span id="fechaorden">12 de Junio del 2023</span> <!--La fecha se obtiene de la información de la orden seleccionada para reportar-->

      <label for="descripcion">Escribe aquí la descripción detallada del incidente:</label>
      <textarea id="descripcion" v-model="descripcion" rows="4" cols="50" required></textarea>

      <label for="foto">Fotografía de prueba (máximo 5MB):</label>
      <input type="file" id="foto" accept="image/*" @change="handlePhotoUpload" required>

      <button type="submit">Enviar Reporte</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      idOrden: '',
      idUsuarioQueReporta: '',
      fechaOrden: '',
      descripcion: '',
      foto: null
    };
  },
  methods: {
    handlePhotoUpload(event) {
      const file = event.target.files[0];
      if (file) {
        // Verificar tamaño del archivo (máximo 5MB)
        if (file.size <= 5 * 1024 * 1024) {
          this.foto = file;
        } else {
          alert('El tamaño de la fotografía debe ser menor o igual a 5MB.');
          event.target.value = '';
        }

        // Verificar si es una imagen
        if (!file.type.startsWith("image/")) {
          alert("¡El archivo seleccionado no es una imagen!\nRecuerda subir una foto valida para que tu reporte sea tomado en cuenta.");
          this.resetFileInput();
          return;
        }
      }

      
    },
    submitReport() {
      // Crear objeto FormData para enviar los datos del Reporte
      const formData = new FormData();
      formData.append('idOrden', this.idOrden);
      formData.append('idUsuarioQueReporta', this.idUsuarioQueReporta)
      formData.append('fechaOrden', this.fechaOrden);
      formData.append('descripcion', this.descripcion);
      formData.append('foto', this.foto);

      // Realizar la solicitud POST a la API utilizando Axios
      axios.post('API_URL', formData)
        .then(response => {
          alert('Se registró el reporte...?');
          console.log(response.data);
        })
        .catch(error => {
          alert('Error del servidor');
          console.error(error);
        });
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
    align-content: end;

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
  