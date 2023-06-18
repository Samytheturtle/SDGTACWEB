<script>
import Validator from './Validator.vue';
export default{
    methods:{
        validateName(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Nombre requerido';
            }else if(!validator.isCorrectMaxLength(100)){
                return 'El nombre debe tener menos de 100 caracteres';
            }else{
                return '';
            }
        },
        validateAddress(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Dirección requerida';
            }else if(!validator.isCorrectMaxLength(200)){
                return 'La dirección debe tener menos de 200 caracteres';
            }else{
                return '';
            }
        },
        validateScheduleWeek(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Horario de la semana requerido';
            }else if(!validator.isCorrectMaxLength(45)){
                return 'El horario debe tener menos de 45 caracteres';
            }else{
                return ''
            }
        },
        validateScheduleWeekend(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Horario de fin de semana requerido';
            }else if(!validator.isCorrectMaxLength(45)){
                return 'El horario debe tener menos de 45 caracteres';
            }else{
                return ''
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