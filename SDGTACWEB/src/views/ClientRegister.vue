<template>
  <div>
    <div class="BackgrountlogoRG">
        <img src="../assets/logo_cuevas.png" alt="Logo de la empresa" class="logoRG" />
    </div>
    <div class="container">
      <h2>Registro de Cliente</h2>
      <form>
        <div class="form-group">
          <label for="fullName">Nombre completo:</label>
          <input type="text" id="fullName" v-model="fullName" required />
        </div>
        <div class="form-group">
          <label for="birthdate">Fecha de nacimiento:</label>
          <input type="date" id="birthdate" v-model="birthdate" required />
        </div>
        <div class="form-group">
          <label for="phoneNumber">Número de teléfono celular:</label>
          <input type="number" id="phoneNumber" v-model="phoneNumber" required />
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-group">
          <label for="passwordConfirm">Confirmar Contraseña:</label>
          <input type="password" id="passwordConfirm" v-model="passwordConfirm" required />
        </div>
      </form>
      <button @click="register">Registrar</button>
      <button @click="cancel">Cancelar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: '',
      birthdate: '',
      phoneNumber: '',
      password: '',
      passwordConfirm: '',
    };
  },
  methods: {
    register() {
      // Lógica para registrar al cliente
      if (this.password !== this.passwordConfirm) {
        alert('Las contraseñas no coinciden');
        return;
      }

      const newClient = {
        fullName: this.fullName,
        birthdate: this.birthdate,
        phoneNumber: this.phoneNumber,
        password: this.password,
      };

      // Aquí puedes enviar los datos del cliente al servidor para su registro
      console.log(newClient);

      // Después de enviar los datos al servidor, puedes redirigir al cliente a la página de inicio de sesión
      this.$router.push('/');
    },
    cancel() {
      // Lógica para cancelar el registro
      this.$router.push('/');
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

.logoRG {
    position: relative;
    width: 100%;
    max-width: 400px;
    display: flex;
}

.BackgrountlogoRG {
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

h2 {
  color: rgb(0, 0, 0);
  font-weight: bold;
  text-align: center;
}
.container {
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
input[type="password"],
input[type="date"],
input[type="tel"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  border-color: #8b7a5e;
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
  transition: 0.3s;
}

button:hover {
  background-color: #ffefd3;
}
</style>