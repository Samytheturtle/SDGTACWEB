<template>
    <div>
        <div class="BackgrountlogoRG">
            <img src="../assets/logo_cuevas.png" alt="Logo de la empresa" class="logoRG" />
        </div>

        <div class="container">
            <h1>Registro de dirección de envío</h1>

            <form>
                <CustomSelect
                    name="state"
                    label="*Estado / Entidad federativa:"
                    @blur="validate"
                    @change="handleChangeState"
                    v-bind:error="validations.state"
                    v-model="state"
                    :options="options.states"
                />

                <CustomSelect
                    name="municipality"
                    label="*Municipio:"
                    @blur="validate"
                    @change="handleChangeMunicipality"
                    v-bind:error="validations.municipality"
                    v-model="municipality"
                    :options="options.municipalities"
                />

                <CustomSelect
                    name="suburb"
                    label="*Colonia:"
                    @blur="validate"
                    v-bind:error="validations.suburb"
                    v-model="suburb"
                    :options="options.suburbs"
                />

                <CustomInput
                    type="number"
                    name="zipcode"
                    label="*Código postal:"
                    @blur="validate"
                    v-bind:error="validations.zipcode"
                    v-model="zipcode"
                />

                <CustomInput 
                    type="text"
                    name="street"
                    label="*Calle:"
                    @blur="validate"
                    v-bind:error="validations.street"
                    v-model="street"
                />

                <CustomInput 
                    type="text" 
                    name="streetNumber" 
                    label="*Número exterior:" 
                    @blur="validate" 
                    v-bind:error="validations.streetNumber" 
                    v-model="streetNumber"
                />

                <CustomInput
                    type="text"
                    name="apartmentNumber"
                    label="Número interior:"
                    @blur="validate"
                    v-bind:error="validations.apartmentNumber"
                    v-model="apartmentNumber"
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
            <CustomButton @click="registerAddress" description="Registrar"/>
            <CustomButton @click="cancel" description="Cancelar"/>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import CustomButton from '../components/CustomButton.vue';
import CustomInput from '../components/CustomInput.vue';
import CustomSelect from '../components/CustomSelect.vue';
import CustomGoogleMaps from '../components/CustomGoogleMaps.vue';
import CustomError from '../components/CustomError.vue';
import { 
    getStates,
    getMunicipalities, 
    getSuburbs,
    useGeocoder,
    validateForm,
    handleInputChange
} from '../viewModel/AddressRegisterViewModel';

var statesArray = [];
var municipalitiesArray = [];
var suburbsArray = [];


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
            street: '',
            streetNumber: '',
            apartmentNumber: '',
            zipcode: 0,
            suburb: '',
            municipality: '',
            state: '',
            validations:{
                street: '',
                streetNumber: '',
                apartmentNumber: '',
                zipcode: '',
                suburb: '',
                municipality: '',
                state: '',
                map: ''
            },
            options:{
                suburbs: [],
                municipalities: [],
                states: []
            }
        }
    },
    methods:{
        registerAddress(){
            const messages = validateForm(this);

            if (messages.length === 0) {
                this.$router.push("/Client-Main-Dash-Board");
            }else{
                alert('Llene los campos correctamente.')
            }
        },
        validate(event){
            const name = event.target.name;
            handleInputChange(name, this);
        },
        cancel(){
            this.$router.push("/Client-Main-Dash-Board");
        },
        findLocation(){
            const location = this.street + ' ' + this.streetNumber + ' ' + 
                this.zipcode + ' ' + this.municipality + ' ' +
                this.suburb + ' ' + this.state;
            const objectLocation = { address: location }
            useGeocoder(objectLocation, this.geoCoderService, this.marker)

        },
        async handleChangeState(event){
            this.options.municipalities = [];
            const state = statesArray.find(state => 
                state.ESTADO === this.state
            );

            if(state){
                const promise = getMunicipalities(
                    this.options, 
                    state.ESTADO_ID
                );
                await promise.then(array => municipalitiesArray = array);
            }
        },
        async handleChangeMunicipality(event){
            this.options.suburbs = [];
            const municipality = municipalitiesArray.find(municipality => 
                municipality.MUNICIPIO === this.municipality
            );
            if(municipality){
                const promise = getSuburbs(this.options, municipality);
                await promise.then(array => suburbsArray = array);
            }
        }
    },
    async mounted(){
        const promise = getStates(this.options);
        await promise.then(array => statesArray = array);
    },
    components:{ CustomInput, CustomButton, CustomSelect, CustomGoogleMaps, CustomError }
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