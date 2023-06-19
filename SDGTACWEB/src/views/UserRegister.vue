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
                    @change="handleUserTypeBranch"
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
                    @change="handleChangeBranch"
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
    getAllBranch,
    validateForm,
    handleInputChange,
    postUser
} from '../viewModel/UserRegisterViewModel';

var respuesta = [];
var branchArray = [];
var userTypeArray = [];

const dateNow = new Date().toISOString().split('T')[0];

export default{
    data() {
        return {
            userType: null,
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
                branches: [],
                userTypes: 
                        [
                            {value:1, label:"ADMINISTRADOR"},
                            {value:2, label:"REPARTIDOR"},
                            {value:3, label:"EJECUTIVO DE VENTA"}
                        ]
            }
        };
    },
    methods: {
        async registerUser() {
            const messages = validateForm(this);
            if (messages.length === 0) {
                //Haciendo POST con Axios
                const promise = postUser(this.userType, this.fullName, this.registerDate, this.username, this.password, this.branch);
                
                await promise.then(array => respuesta = array);
                console.log("Respuesta: ");
                console.log(respuesta)

                if(respuesta.affectedRows == 1){
                    alert("¡Se registró el usuario!")
                    this.$router.push("/Administrador-Main-Dash-Board");
                }else{
                    console.log("No se registró el usuario");
                }           
            }else{
                alert('Llene los campos correctamente');
            }
        },
        validate(event) {
            const name = event.target.name;   
            handleInputChange(name, this);
        },
        cancel() {
            this.$router.push("/Administrator-Main-Dash-Board");
        },
        async handleChangeBranch(event){ //Actualizando la lista de Sucursales
            const branch = branchArray.find(branch => 
                branch.nombreComercial === this.branch
            );
        },
        async handleUserTypeBranch(event){ //Actualizando la lista de tipos de usuario
            const userType = userTypeArray.find(userType => 
                userType.label === this.userType
            );
        }
    },
    async mounted(){
        const promise = getAllBranch(this.options);
        await promise.then(array => branchArray = array);
        userTypeArray = [   
                        {value:1, label:"ADMINISTRADOR"},
                        {value:2, label:"REPARTIDOR"},
                        {value:3, label:"EJECUTIVO DE VENTA"}
                    ];

        //console.log(branchArray);
        //console.log(userTypeArray);
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
    background-image: url("../assets/BackgrownLogin.jpg");
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