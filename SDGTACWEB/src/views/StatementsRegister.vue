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
    useGeocoder
} from '../viewModel/StatementsRegisterViewModel';

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
        registerBranch(){
            const messages = validateForm(this);

            if(messages.length === 0){

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
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
}

.logoRG {
    position: relative;
    width: 100%;
    max-width: 300px;
    display: inline-block;
}

.BackgrountlogoRG {
    position: relative;
    top: 20%;
    left: 100%; 
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
    position: relative;
    display: block;
    top: 30%;
    left: 100%;
    margin-bottom: 20px;
    transform: translateX(-50%);
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

form {
    margin-top: 20px;
}
</style>