<template>
    <div>
        <div class="BackgrountlogoRG">
            <img src="../assets/logo_cuevas.png" alt="Logo de la empresa" class="logoRG" />
        </div>

        <div class="container">
            <h1>Registro de sucursal</h1>

            <form>

                <CustomInput 
                    type="text"
                    name="name"
                    label="Nombre comercial:"
                    @blur="validate"
                    v-bind:error="validations.name"
                    v-model="name"
                />

                <CustomInput 
                    type="text" 
                    name="scheduleWeek" 
                    label="Horario Lunes a Viernes:" 
                    @blur="validate" 
                    v-bind:error="validations.scheduleWeek" 
                    v-model="scheduleWeek"
                />

                <CustomInput
                    type="text"
                    name="scheduleWeekend"
                    label="Horario Sábado y Domingo:"
                    @blur="validate"
                    v-bind:error="validations.scheduleWeekend"
                    v-model="scheduleWeekend"
                />

                <CustomInput
                    type="text"
                    name="address"
                    label="*Dirección completa:"
                    @blur="validate"
                    v-bind:error="validations.address"
                    v-model="address"
                />
            </form>

            <CustomButton @click="findLocation" description="Buscar"/>

            <CustomGoogleMaps 
                :disableUI="false" 
                :zoom="15" 
                mapType="roadmap"
                :center="marker.position"
                :marker="marker"
                :geoCoderService="geoCoderService"
            />
            <CustomError :error="validations.map"/>

            <CustomButton @click="registerBranch" description="Registrar"/>
            <CustomButton @click="cancel" description="Cancelar"/>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import CustomButton from '../components/CustomButton.vue';
import CustomInput from '../components/CustomInput.vue';
import CustomGoogleMaps from '../components/CustomGoogleMaps.vue';
import CustomError from '../components/CustomError.vue';
import { 
    validateForm,
    handleInputChange,
    useGeocoder,
    postBranch
} from '../viewModel/StatementsRegisterViewModel';

var respuesta = [];

export default{
    setup(){
        let geoCoderService = ref({geo:{}});
        let marker = ref({
            title: 'Xalapa-Enríquez, Ver., México',
            position: {
                lat: 19.5437751,
                lng: -96.91018059999999,
            }
        });

        return {
            marker,
            geoCoderService
        }
    },
    data(){
        return {
            address: '',
            name: '',
            scheduleWeek: '',
            scheduleWeekend: '',
            validations:{
                address: '',
                name: '',
                scheduleWeek: '',
                scheduleWeekend: '',
                map: ''
            }
        }
    },
    methods:{
        async registerBranch(){
            const messages = validateForm(this);

            if(messages.length === 0){
                //Haciendo POST con Axios
                const promise = postBranch(this.name, this.address, this.marker.position.lat, this.marker.position.lng,
                 this.scheduleWeek, this.scheduleWeekend);
                
                //Comprobando Respuesta
                await promise.then(array => respuesta = array);
                console.log("Respuesta: ");
                console.log(respuesta);

                if(respuesta.affectedRows == 1){
                    alert("¡Se registró la sucursal!");
                    this.$router.push("/Administrador-Main-Dash-Board");             
                }else{
                    alert("No se registró la sucursal");
                }
            }else{
                alert('Llene los campos correctamente');
            }
        },
        findLocation(){
            const location = this.street + ' ' + this.streetNumber + ' ' + 
                this.zipcode + ' ' + this.municipality + ' ' +
                this.suburb + ' ' + this.state;
            const objectLocation = { address: location }
            useGeocoder(objectLocation, this.geoCoderService, this.marker)

        },
        validate(event) {
            const name = event.target.name;
            
            handleInputChange(name, this);
        },
        cancel(){
            this.$router.push("/Administrator-Main-Dash-Board");
        }
    },
    components:{ CustomInput, CustomButton, CustomGoogleMaps, CustomError }
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
    background-image: url("../assets/BackgrownLogin.jpg")
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