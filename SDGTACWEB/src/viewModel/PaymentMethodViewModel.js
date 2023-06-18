import ValidatorMethodForm from '../utils/validation/ValidatorMethodForm.vue';

export function validateForm(data){
    data.validations.cardType = ValidatorMethodForm.methods.validateCardType(
        data.cardType
    );
    data.validations.ownerName = ValidatorMethodForm.methods.validateName(
        data.ownerName
    );
    data.validations.cardNumber = ValidatorMethodForm.methods.validateCardNumber(
        data.cardNumber.toString()
    );
    data.validations.cardIssuer = ValidatorMethodForm.methods.validateIssuer(
        data.cardIssuer, 
        data.cardNumber
    );
    data.validations.expirationYear = ValidatorMethodForm.methods.validateYear(
        data.expirationYear
    );
    data.validations.expirationMonth = ValidatorMethodForm.methods.validateMonth(
        data.expirationMonth
    );
    data.validations.cvv = ValidatorMethodForm.methods.validateCVV(
        data.cvv
    );
    if (data.validations.expirationMonth.length === 0 && 
        data.validations.expirationYear.length === 0) {
        data.validations.expirationMonth = ValidatorMethodForm.methods.validateExpiration(
            data.expirationYear, data.expirationMonth
        );
        data.validations.expirationYear = ValidatorMethodForm.methods.validateExpiration(
            data.expirationYear, data.expirationMonth
        );
    }
    if (data.validations.expirationMonth.length === 0) {
        data.validations.expirationMonth = ValidatorMethodForm.methods.validateExpiration(
            data.expirationYear, data.expirationMonth
        );
    }
    
    const messages = Object.values(data.validations).filter(
        message => message.length > 0
    );

    return messages;
}

export function handleInputChange(name, data){
    if (name === "cardType") {
        data.validations.cardType = ValidatorMethodForm.methods.validateCardType(
            data.cardType
        );
    }
    if (name === "ownerName") {
        data.validations.ownerName = ValidatorMethodForm.methods.validateName(
            data.ownerName
        );
    }
    if (name === "cardNumber") {
        data.validations.cardNumber = ValidatorMethodForm.methods.validateCardNumber(
            data.cardNumber.toString()
        );
    }
    if (name === "cardNumber") {
        data.validations.cardIssuer = ValidatorMethodForm.methods.validateIssuer(
            data.cardIssuer, data.cardNumber
        );
    }
    if (name === "cardIssuer") {
        data.validations.cardIssuer = ValidatorMethodForm.methods.validateIssuer(
            data.cardIssuer, 
            data.cardNumber
        );
    }
    if (name === "expirationYear" || name === "expirationMonth") {
        data.validations.expirationYear = ValidatorMethodForm.methods.validateYear(
            data.expirationYear
        );
        data.validations.expirationMonth = ValidatorMethodForm.methods.validateMonth(
            data.expirationMonth
        );
        if (data.validations.expirationMonth.length === 0 && 
            data.validations.expirationYear.length === 0) {
            data.validations.expirationYear = ValidatorMethodForm.methods.validateExpiration(
                data.expirationYear, data.expirationMonth
            );
            data.validations.expirationMonth = ValidatorMethodForm.methods.validateExpiration(
                data.expirationYear, data.expirationMonth
            );
        }
    }
    if (name === "cvv") {
        data.validations.cvv = ValidatorMethodForm.methods.validateCVV(
            data.cvv
        );
    }
}