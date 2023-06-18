<template>
    <div>
        <div class="BackgrountlogoRG">
            <img src="../assets/logo_cuevas.png" alt="Logo de la empresa" class="logoRG" />
        </div>
        
        <div class="container">
            <h1>Registro de usuario</h1>

            <form>
                <CustomSelect
                    name="userType"
                    label="Cargo:"
                    @blur="validate"
                    v-bind:error="validations.userType"
                    v-model="userType"
                    :options="options.userTypes"
                />

                <CustomInput 
                    type="text"
                    name="fullName"
                    label="Nombre completo:"
                    @blur="validate"
                    v-bind:error="validations.fullName"
                    v-model="fullName"
                />

                <CustomInput 
                    type="date"
                    name="registerDate"
                    label="Fecha de ingreso:"
                    @blur="validate"
                    v-bind:error="validations.registerDate"
                    v-model="registerDate"
                />

                <CustomSelect 
                    name="branch"
                    label="Sucursal:"
                    @blur="validate"
                    v-bind:error="validations.branch"
                    v-model="branch"
                    :options="options.branches"
                />

                <CustomInput 
                    type="text"
                    name="username"
                    label="Usuario:"
                    @blur="validate"
                    v-bind:error="validations.username"
                    v-model="username"
                />

                <CustomInput 
                    type="password"
                    name="password"
                    label="Contraseña:"
                    @blur="validate"
                    v-bind:error="validations.password"
                    v-model="password"
                />

                <CustomInput 
                    type="password"
                    name="confirmedPassword"
                    label="Confirmar contraseña:"
                    @blur="validate"
                    v-bind:error="validations.confirmedPassword"
                    v-model="confirmedPassword"
                />
            </form>
            <customButton @click="registerUser" description="Registrar"/>
            <CustomButton @click="cancel" description="Cancelar"/>
        </div>
    </div>
</template>

<script>
import CustomButton from '../components/CustomButton.vue';
import CustomInput from '../components/CustomInput.vue';
import CustomSelect from '../components/CustomSelect.vue';
import { 
    validateForm,
    handleInputChange
} from '../viewModel/UserRegisterViewModel';

const dateNow = new Date().toISOString().split('T')[0];

export default{
    data() {
        return {
            userType: null,
            fullName: "",
            registerDate: dateNow,
            branch: null,
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
                branches: [],
                userTypes: []
            }
        };
    },
    methods: {
        registerUser() {
            const messages = validateForm(this);

            if (messages.length === 0) {
                this.$router.push("/Client-Main-Dash-Board");
            }else{
                alert('Llene los campos correctamente');
            }
        },
        validate(event) {
            const name = event.target.name;
            
            handleInputChange(name, data);
        },
        cancel() {
            this.$router.push("/Administrator-Main-Dash-Board");
        }
    },
    components: { CustomInput, CustomSelect, CustomButton }
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

h1 {
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
</style>