<script>
import Validator from './Validator.vue';

export default{
    methods:{
        validateState(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Estado requerido';
            }else if(!validator.isCorrectMaxLength(50)){
                return 'El estado debe tener menos de 50 carcteres';
            }else if(!validator.isUpperCaseAll()){
                return 'El estado debe estar en mayúsculas';
            }else{
                return '';
            }
        },
        validateMunicipality(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Municipio requerido';
            }else if(!validator.isCorrectMaxLength(50)){
                return 'El municipio debe tener menos de 50 carcteres';
            }else if(!validator.isUpperCaseAll()){
                return 'El municipio debe estar en mayúsculas';
            }else{
                return '';
            }
        },
        validateSuburb(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Colonia requerida';
            }else if(!validator.isCorrectMaxLength(100)){
                return 'La colonia debe tener menos de 100 carcteres';
            }else{
                return '';
            }
        },
        validateZipcode(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Código postal requerido';
            }else if(!validator.isCorrectMinNumber(1)){
                return 'El código postal debe ser mayor a 0';
            }else if(!validator.isCorrectMaxNumber(99999)){
                return "El código postal no debe exceder de 99999";
            }else{
                return '';
            }
        },
        validateStreet(value){
            const validator = Validator(value);
            
            if(validator.isEmpty()){
                return 'Calle requerida';
            }else if(!validator.isCorrectMaxLength(200)){
                return 'La calle debe tener menos de 200 carcteres';
            }else{
                return '';
            }
        },
        validateApartmentNumber(value){
            const validator = Validator(value)
            if(value){
                if(!validator.isCorrectMaxLength(45)){
                    return 'El número interior no debe tener más de 45 caracteres';
                }
                return '';
            }else{
                return '';
            }
        },
        validateStreetNumber(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Número exterior requerido';
            }else if(!validator.isCorrectMaxLength(45)){
                return 'El número exterior no debe tener más  de 45 caracteres';
            }else{
                return '';
            }
        },
        validateLatitude(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Latitud requerida';
            }else if(!validator.isNumber()){
                return 'La latitud debe ser un número';
            }else if(!validator.isCorrectMaxLength(45)){
                return 'La latitud debe tener menos de 45 caracteres';
            }else{
                return '';
            }
        },
        validateLongitude(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Longitud requerida';
            }else if(!validator.isNumber()){
                return 'La longitud debe ser un número';
            }else if(!validator.isCorrectMaxLength(45)){
                return 'La longitud debe tener menos de 45 caracteres';
            }else{
                return '';
            }
        }
    }
}
</script>