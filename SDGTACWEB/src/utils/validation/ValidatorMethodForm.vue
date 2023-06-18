<script>
import Validator from './Validator.vue';

export default{
    methods:{
        validateCardType(value){
            const validator = Validator(value);
            
            if(validator.isEmpty()){
                return 'Tipo de tarjeta requerido';
            }else if(!validator.isCorrectMaxLength(20)){
                return 'El tipo de tarjeta debe tener menos de 20 caracteres';
            }else{
                return '';
            }
        },
        validateName(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Nombre del titular requerido';
            }else if(validator.isWithNumbers()){
                return 'El nombre del titular no debe contener números';
            }else if(!validator.isCorrectMaxLength(250)){
                return 'El nombre del titular debe tener menos de 250 caracteres';
            }else{
                return '';
            }
        },
        validateCardNumber(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Número de tarjeta requerido';
            }else if(!validator.isNumber()){
                return 'El número de tarjeta debe ser una serie de números';
            }else if(!validator.isCorrectMinLength(12) || !validator.isCorrectMaxLength(19)){
                return 'El número de tarjeta debe estar entre 12 y 19 dígitos';
            }else{
                return '';
            }
        },
        validateIssuer(issuer, cardNumber){
            const validator = Validator(issuer);
            const firstDigitCard = Math.floor(cardNumber.toString().charAt(0));
            if(validator.isEmpty()){
                return 'Emisor requerido';
            }else if(!validator.isCorrectMaxLength(50)){
                return 'El emisor debe tener menos de 50 caracteres';
            }else if(issuer === "VISA"){
                if(firstDigitCard !== 4){
                    return "VISA no maneja este número de tarjeta";
                }
                return ''
            }else{
                if(firstDigitCard !== 5){
                    return "MasterCard no maneja este número de tarjeta";
                }
                return ''
            }
        },
        validateYear(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Año de vencimiento requerido';
            }else if(value.toString().length !== 4){
                return "El año de vencimiento debe ser de 4 dígitos";
            }else{
                return '';
            }
        },
        validateMonth(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Mes requerido';
            }else if(value < 1 || value > 12){
                return "El mes de vencimiento debe ser entre 1-12";
            }else{
                return '';
            }
        },
        validateCVV(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'CVV requerido';
            }else if(!validator.isCVV()){
                return "El CVV debe ser de 3 o 4 dígitos";
            }else{
                return '';
            }
        },
        validateExpiration(year, month){
            if(year < (new Date().getFullYear())){
                return "La tarjeta está expirada";
            }else{
                if(month < (new Date().getMonth() + 1)){
                    return "La tarjeta está expirada";
                }
                return '';
            }
        }
    }
}
</script>