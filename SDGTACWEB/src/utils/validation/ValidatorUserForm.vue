<script>
import Validator from './Validator.vue';

export default{
    methods:{
        validateUserType(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Tipo de usuario requerido';
            }else if(validator.isNumber()){
                return 'El tipo de usuario no tiene el formato correcto';
            }else{
                return '';
            }
        },
        validateName(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Nombre requerido';
            }else if(validator.isWithNumbers()){
                return 'El nombre no debe contener números';
            }else if(!validator.isCorrectMaxLength(50)){
                return 'El nombre debe tener menos de 50 caracteres';
            }else{
                return '';
            }
        },
        validateUsername(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Usuario requerido';
            }else if(!validator.isCorrectMaxLength(50)){
                return 'El usuario debe tener menos de 50 caracteres';
            }else{
                return '';
            }
        },
        validateDate(value){
            const validator = Validator(value);
            if(!validator.isDate()){
                return 'Debe registrar la fecha completa';
            }else{
                return '';
            }
        },
        validateBranch(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Sucursal requerida';
            }else if(validator.isNumber()){
                return 'La sucursal no tiene el formato correcto';
            }else{
                return '';
            }
        },
        validatePassword(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Contraseña requerida';
            }else if(validator.isPasswordWithWhitespace()){
                return 'La contraseña no debe tener espacios en blanco';
            }else if(!validator.isCorrectMaxLength(20) || !validator.isCorrectMinLength(6)){
                return 'La contraseña debe estar entre 6 y 20 caracteres';
            }else if(!validator.isPasswordWithLowerCase()){
                return 'La contraseña debe tener al menos una letra minúscula';
            }else if(!validator.isWithNumbers()){
                return 'La contraseña debe tener al menos un número';
            }else{
                return '';
            }
        },
        confirmPassword(value, confirm){
            const validator = Validator(confirm);
            if(validator.isEmpty()){
                return 'Contraseña requerida';
            }else if(value !== confirm){
                return 'Las contraseñas no coinciden';
            }else{
                return '';
            }
        }
    }
}
</script>