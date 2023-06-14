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
                    @blur="Validate"
                    v-bind:error="validations.cardType"
                    v-model="cardType"
                    :options="options.cardTypes"
                />

                <CustomInput 
                    type="text" 
                    name="ownerName" 
                    label="Nombre del titular:" 
                    @blur="Validate" 
                    v-bind:error="validations.ownerName" 
                    v-model="ownerName"
                />

                <CustomInput
                    type="number"
                    name="cardNumber"
                    label="Número de tarjeta:"
                    @blur="Validate"
                    v-bind:error="validations.cardNumber"
                    v-model="cardNumber"
                />

                <CustomSelect 
                    name="cardIssuer"
                    label="Emisor:"
                    @blur="Validate"
                    v-bind:error="validations.cardIssuer"
                    v-model="cardIssuer"
                    :options="options.cardIssuers"
                />

                <CustomInput
                    type="number"
                    name="expirationYear"
                    label="Año de vencimiento:"
                    @blur="Validate"
                    v-bind:error="validations.expirationYear"
                    v-model="expirationYear"
                />

                <CustomInput
                    type="number"
                    name="expirationMonth"
                    label="Mes de vencimiento:"
                    @blur="Validate"
                    v-bind:error="validations.expirationMonth"
                    v-model="expirationMonth"
                />

                <CustomInput
                    type="text"
                    name="cvv"
                    label="CVV:"
                    @blur="Validate"
                    v-bind:error="validations.cvv"
                    v-model="cvv"
                />
            </form>
            <button @click="RegisterMethod">Registrar</button>
            <button @click="Cancel">Cancelar</button>
        </div>
    </div>
</template>

<script>
import CustomInput from '../components/CustomInput.vue';
import CustomSelect from '../components/CustomSelect.vue';
import ValidatorMethodForm from '../components/ValidatorMethodForm.vue';

export default{
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
        };
    },
    methods: {
        RegisterMethod() {
            this.validations.cardType = ValidatorMethodForm.methods.validateCardType(this.cardType);
            this.validations.ownerName = ValidatorMethodForm.methods.validateName(this.ownerName);
            this.validations.cardNumber = ValidatorMethodForm.methods.validateCardNumber(this.cardNumber.toString());
            this.validations.cardIssuer = ValidatorMethodForm.methods.validateIssuer(this.cardIssuer, this.cardNumber);
            this.validations.expirationYear = ValidatorMethodForm.methods.validateYear(this.expirationYear);
            this.validations.expirationMonth = ValidatorMethodForm.methods.validateMonth(this.expirationMonth);
            this.validations.cvv = ValidatorMethodForm.methods.validateCVV(this.cvv);
            if (this.validations.expirationMonth.length === 0 && this.validations.expirationYear.length === 0) {
                this.validations.expirationMonth = ValidatorMethodForm.methods.validateExpiration(this.expirationYear, this.expirationMonth);
                this.validations.expirationYear = ValidatorMethodForm.methods.validateExpiration(this.expirationYear, this.expirationMonth);
            }
            if (this.validations.expirationMonth.length === 0) {
                this.validations.expirationMonth = ValidatorMethodForm.methods.validateExpiration(this.expirationYear, this.expirationMonth);
            }
            const messages = Object.values(this.validations).filter(message => message.length > 0);
            if (messages.length === 0) {
                this.$router.push("/Client-Main-Dash-Board");
            }
        },
        Validate(event) {
            const name = event.target.name;
            if (name === "cardType") {
                this.validations.cardType = ValidatorMethodForm.methods.validateCardType(this.cardType);
            }
            if (name === "ownerName") {
                this.validations.ownerName = ValidatorMethodForm.methods.validateName(this.ownerName);
            }
            if (name === "cardNumber") {
                this.validations.cardNumber = ValidatorMethodForm.methods.validateCardNumber(this.cardNumber.toString());
            }
            if (name === "cardNumber") {
                this.validations.cardIssuer = ValidatorMethodForm.methods.validateIssuer(this.cardIssuer, this.cardNumber);
            }
            if (name === "cardIssuer") {
                this.validations.cardIssuer = ValidatorMethodForm.methods.validateIssuer(this.cardIssuer, this.cardNumber);
            }
            if (name === "expirationYear" || name === "expirationMonth") {
                this.validations.expirationYear = ValidatorMethodForm.methods.validateYear(this.expirationYear);
                this.validations.expirationMonth = ValidatorMethodForm.methods.validateMonth(this.expirationMonth);
                if (this.validations.expirationMonth.length === 0 && this.validations.expirationYear.length === 0) {
                    this.validations.expirationYear = ValidatorMethodForm.methods.validateExpiration(this.expirationYear, this.expirationMonth);
                    this.validations.expirationMonth = ValidatorMethodForm.methods.validateExpiration(this.expirationYear, this.expirationMonth);
                }
            }
            if (name === "cvv") {
                this.validations.cvv = ValidatorMethodForm.methods.validateCVV(this.cvv);
            }
        },
        Cancel() {
            this.$router.push("/Client-Main-Dash-Board");
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

label {
  display: block;
  font-weight: bold;
  color: black;
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