<template>
    <div>
        <div class="BackgrountlogoRG">
            <img src="../assets/logo_cuevas.png" alt="Logo de la empresa" class="logoRG" />
        </div>
        
        <div class="container">
            <h1>Registro de usuario</h1>

            <form>
                <CustomInput
                    type="text"
                    name="userType"
                    label="Cargo:"
                    @blur="Validate"
                    v-bind:error="validations.userType"
                    v-model="userType"
                />

                <CustomInput 
                    type="text"
                    name="fullName"
                    label="Nombre completo:"
                    @blur="Validate"
                    v-bind:error="validations.fullName"
                    v-model="fullName"
                />

                <CustomInput 
                    type="date"
                    name="registerDate"
                    label="Fecha de ingreso:"
                    @blur="Validate"
                    v-bind:error="validations.registerDate"
                    v-model="registerDate"
                />

                <CustomSelect 
                    name="branch"
                    label="Emisor:"
                    @blur="Validate"
                    v-bind:error="validations.branch"
                    v-model="branch"
                    :options="options.branches"
                />

                <CustomInput 
                    type="text"
                    name="username"
                    label="Usuario:"
                    @blur="Validate"
                    v-bind:error="validations.username"
                    v-model="username"
                />

                <CustomInput 
                    type="password"
                    name="password"
                    label="Contraseña:"
                    @blur="Validate"
                    v-bind:error="validations.password"
                    v-model="password"
                />

                <CustomInput 
                    type="password"
                    name="confirmedPassword"
                    label="Confirmar contraseña:"
                    @blur="Validate"
                    v-bind:error="validations.confirmedPassword"
                    v-model="confirmedPassword"
                />
            </form>
            <button @click="RegisterUser">Registrar</button>
            <button @click="Cancel">Cancelar</button>
        </div>
    </div>
</template>

<script>
import CustomInput from '../components/CustomInput.vue';
import CustomSelect from '../components/CustomSelect.vue';
import ValidatorUserForm from '../components/ValidatorUserForm.vue';

const dateNow = new Date().toISOString().split('T')[0];

export default{
    data() {
        return {
            userType: "",
            fullName: "",
            registerDate: dateNow,
            branch: "",
            username: "",
            password: "",
            confirmedPassword: "",
            validations: {
                userType: "",
                fullName: "",
                registerDate: "",
                branch: "",
                username: "",
                password: "",
                confirmedPassword: "",
            },
            options:{
                branches: []
            }
        };
    },
    methods: {
        RegisterUser() {
            this.validations.userType = ValidatorUserForm.methods.validateUserType(this.userType);
            this.validations.fullName = ValidatorUserForm.methods.validateName(this.fullName);
            this.validations.registerDate = ValidatorUserForm.methods.validateDate(this.registerDate);
            this.validations.branch = ValidatorUserForm.methods.validateBranch(this.branch);
            this.validations.username = ValidatorUserForm.methods.validateUsername(this.username);
            this.validations.password = ValidatorUserForm.methods.validatePassword(this.password);
            this.validations.confirmedPassword = ValidatorUserForm.methods.confirmPassword(this.password, this.confirmedPassword);
            const messages = Object.values(this.validations).filter(message => message.length > 0);
            if (messages.length === 0) {
                this.$router.push("/Client-Main-Dash-Board");
            }
        },
        Validate(event) {
            const name = event.target.name;
            if (name === "userType") {
                this.validations.userType = ValidatorUserForm.methods.validateUserType(this.userType);
            }
            if (name === "fullName") {
                this.validations.fullName = ValidatorUserForm.methods.validateName(this.fullName);
            }
            if (name === "registerDate") {
                this.validations.registerDate = ValidatorUserForm.methods.validateDate(this.registerDate);
            }
            if (name === "branch") {
                this.validations.branch = ValidatorUserForm.methods.validateBranch(this.branch);
            }
            if (name === "username") {
                this.validations.username = ValidatorUserForm.methods.validateUsername(this.username);
            }
            if (name === "password") {
                this.validations.password = ValidatorUserForm.methods.validatePassword(this.password);
            }
            if (name === "confirmedPassword") {
                this.validations.confirmedPassword = ValidatorUserForm.methods.confirmPassword(this.password, this.confirmedPassword);
            }
        },
        Cancel() {
        }
    },
    components: { CustomInput, CustomSelect }
}
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
}

.logoRG {
    position: relative;
    width: 100%;
    max-width: 300px;
    display: flex;
}

.BackgrountlogoRG {
    position: fixed;
    top: 10%; 
    left: 50%; 
    transform: translateX(-50%);
    width: 50%; 
    max-width: 200px;
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
    position:absolute;
    display: block;
    width: 80%;
    top: 30%; 
    bottom: 5%;
    transform: translateX(-50%);
    max-width: 2000px;
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

select,
input[type="text"],
input[type="password"],
input[type="date"] {
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

.error{
    color: red;
}
</style>