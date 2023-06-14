<script>
const numbersRegex = /^(.+?[0-9])|([0-9].+?)$/;
const passwordWhiteSpaceRegex = /^(.+?[\s])|([\s].+?)$/;
const passwordLowerCaseRegex = /^(.+?[a-z])|([a-z].+?)$/;
const cvvRegex = /^[0-9]{3,4}$/;

const Validator = (value) =>{
    return {
        isEmpty(){
            if(!value){
                return true
            }
            return false
        },
        isCVV(){
            if (cvvRegex.test(value)) {
                return true;
            }
            return false;
        },
        isDate(){
            if(!isNaN(Date.parse(value))){
                return true
            }
            return false
        },
        isCorrectMinLength(min){
            if(value.length >= min){
                return true
            }
            return false
        },
        isCorrectMaxLength(max){
            if(value.length <= max){
                return true
            }
            return false
        },
        isWithNumbers(){
            if(numbersRegex.test(value)){
                return true
            }
            return false
        },
        isPasswordWithWhitespace(){
            if(passwordWhiteSpaceRegex.test(value)){
                return true
            }
            return false
        },
        isPasswordWithLowerCase(){
            if(passwordLowerCaseRegex.test(this.password)){
                return true
            }
            return false
        }
    }
}

export default Validator
</script>