<template>
    <div>
        <div class="BackgrountlogoRG">
            <img src="../assets/logo_cuevas.png" alt="Logo de la empresa" class="logoRG" />
        </div>

        <div class="container">
            <h1>Registro de método de pago</h1>

            <form>
                <CustomSelect 
                    name="cardType"
                    label="Tipo de tarjeta:"
                    @blur="validate"
                    v-bind:error="validations.cardType"
                    v-model="cardType"
                    :options="options.cardTypes"
                />

                <CustomInput 
                    type="text" 
                    name="ownerName" 
                    label="Nombre del titular:" 
                    @blur="validate" 
                    v-bind:error="validations.ownerName" 
                    v-model="ownerName"
                />

                <CustomInput
                    type="number"
                    name="cardNumber"
                    label="Número de tarjeta:"
                    @blur="validate"
                    v-bind:error="validations.cardNumber"
                    v-model="cardNumber"
                />

                <CustomSelect 
                    name="cardIssuer"
                    label="Emisor:"
                    @blur="validate"
                    v-bind:error="validations.cardIssuer"
                    v-model="cardIssuer"
                    :options="options.cardIssuers"
                />

                <CustomInput
                    type="number"
                    name="expirationYear"
                    label="Año de vencimiento:"
                    @blur="validate"
                    v-bind:error="validations.expirationYear"
                    v-model="expirationYear"
                />

                <CustomInput
                    type="number"
                    name="expirationMonth"
                    label="Mes de vencimiento:"
                    @blur="validate"
                    v-bind:error="validations.expirationMonth"
                    v-model="expirationMonth"
                />

                <CustomInput
                    type="text"
                    name="cvv"
                    label="CVV:"
                    @blur="validate"
                    v-bind:error="validations.cvv"
                    v-model="cvv"
                />
            </form>
            <CustomButton @click="registerMethod" description="Registrar"/>
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
    handleInputChange,
    postPaymentMethod
} from '../viewModel/PaymentMethodViewModel';

var respuesta = [];

export default{
    setup(){
        let userId = 4; //OBTENER DE ALGÚN MODO EL ID DEL CLIENTE QUE INICIÓ SESIÓN Y COLOCARLO AQUÍ AL ABRIR LA VENTANA.
        return {
            userId
        }
    },
    data() {
        return {
            type: null,
            cardType: 'Debito',
            ownerName: "",
            cardNumber: 0,
            cardIssuer: "VISA",
            expirationYear: 0,
            expirationMonth: 0,
            cvv: "",
            validations: {
                cardType: "",
                ownerName: "",
                cardNumber: "",
                cardIssuer: "",
                expirationYear: "",
                expirationMonth: "",
                cvv: "",
            },
            options:{
                cardTypes: [
                    {label: 'Crédito', value: 'Credito'}, 
                    {label: 'Débito', value: 'Debito'}
                ],
                cardIssuers: [
                    {label: 'VISA', value: 'VISA'},
                    {label: 'MasterCard', value: 'MasterCard'}
                ]
            }
        }
    },
    methods: {
        async registerMethod() {
            const messages = validateForm(this);

            if (messages.length === 0) {
                //Haciendo POST con Axios
                const promise = postPaymentMethod(this.userId, this.ownerName, this.cardType, this.cardNumber, 
                this.cardIssuer, this.expirationYear, this.expirationMonth, this.cvv);
                
                //Comprobando Respuesta
                await promise.then(array => respuesta = array);
                console.log("Respuesta: ");
                console.log(respuesta)

                if(respuesta.affectedRows == 1){
                    alert("¡Se registró el método de pago!");
                    this.$router.push("/Client-Main-Dash-Board");
                }else{
                    alert("No se registro el método de pago");
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
            this.$router.push("/Client-Main-Dash-Board");
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