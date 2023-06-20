<script>
import Validator from './Validator.vue';

export default{
    methods:{
        validateCategory(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Selecciona una categoría';
            }else if(!validator.isNumber()){
                return 'La categoría no tiene el formato correcto';
            }else{
                return '';
            }
        },
        validateBarcode(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Código de Barras requerido';
            }else if(!validator.isCorrectMaxLength(45)){
                return 'La longitud maxima es de 45';
            }else{
                return '';
            }
        },
        validateProductName(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Nombre requerido';
            }else if(!validator.isCorrectMaxLength(50)){
                return 'El nombre debe tener menos de 50 caracteres';
            }else{
                return '';
            }
        },
        validateDescription(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Descripción requerida';
            }else if(!validator.isCorrectMaxLength(200)){
                return 'La descripción rebasa los 200 caracteres';
            }else{
                return '';
            }
        },
        validateStock(value){
            const validator = Validator(value);
            if(!validator.isNumber()){
                return 'El formato es incorrecto';
            }else if(validator == 0){
                return 'Debe añadir al menos un producto en existencia';
            }else{
                return '';
            }
        },
        validatePrice(value){
            const validator = Validator(value);
            if(!validator.isNumber()){
                return 'El formato es incorrecto';
            }else if(validator == 0){
                return 'Debe colocar un precio mayor a 0';
            }else{
                return '';
            }
        },
        validateImage(value){
            const validator = Validator(value);
            if(validator.isEmpty()){
                return 'Seleccione una imagen';
            }else if(validator.size > 5 * 1024 * 1024){
                return 'La imagen excede el limite de 5 megabytes';
            }else{
                return '';
            }
        }
    }
}
</script>