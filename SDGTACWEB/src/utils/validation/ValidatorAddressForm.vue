<script>
import Validator from './Validator.vue';

export default{
    methods:{
        validateState(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Estado requerido';
            }else{
                return '';
            }
        },
        validateMunicipality(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Municipio requerido';
            }else{
                return '';
            }
        },
        validateSuburb(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Colonia requerida';
            }else{
                return ''
            }
        },
        validateZipcode(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Código postal requerido';
            }else if(!validator.isCorrectMinNumber(1)){
                return 'El código postal debe ser mayor a 0'
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
            }else if(!validator.isCorrectMaxLength(50)){
                return 'La calle debe tener menos de 50 carcteres';
            }else{
                return '';
            }
        },
        validateApartmentNumber(value){
            const validator = Validator(value)
            if(value){
                if(!validator.isCorrectMaxNumber(999) || !validator.isCorrectMinNumber(1)){
                    return 'El número interior debe estar entre 1 y 999';
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
            }else if(!validator.isCorrectMinNumber(1)){
                return 'El número exterior debe ser mayor a 0';
            }
            else if(!validator.isCorrectMaxNumber(999)){
                return 'El número exterior no debe exceder de 999';
            }else{
                return '';
            }
        },
        validateLatitude(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Latitud requerida'
            }else{
                return ''
            }
        },
        validateLongitude(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Longitud requerida'
            }else{
                return ''
            }
        }
    }
}
</script>