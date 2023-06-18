import ValidatorUserForm from '../utils/validation/ValidatorUserForm.vue';

export function validateForm(data){
    data.validations.userType = ValidatorUserForm.methods.validateUserType(
        data.userType
    );
    data.validations.fullName = ValidatorUserForm.methods.validateName(
        data.fullName
    );
    data.validations.registerDate = ValidatorUserForm.methods.validateDate(
        data.registerDate
    );
    data.validations.branch = ValidatorUserForm.methods.validateBranch(
        data.branch
    );
    data.validations.username = ValidatorUserForm.methods.validateUsername(
        data.username
    );
    data.validations.password = ValidatorUserForm.methods.validatePassword(
        data.password
    );
    data.validations.confirmedPassword = ValidatorUserForm.methods.confirmPassword(
        data.password, 
        data.confirmedPassword
    );
    
    const messages = Object.values(data.validations).filter(
        message => message.length > 0
    );

    return messages;
}

export function handleInputChange(name, data){
    if (name === "userType") {
        data.validations.userType = ValidatorUserForm.methods.validateUserType(
            data.userType
        );
    }
    if (name === "fullName") {
        data.validations.fullName = ValidatorUserForm.methods.validateName(
            data.fullName
        );
    }
    if (name === "registerDate") {
        data.validations.registerDate = ValidatorUserForm.methods.validateDate(
            data.registerDate
        );
    }
    if (name === "branch") {
        data.validations.branch = ValidatorUserForm.methods.validateBranch(
            data.branch
        );
    }
    if (name === "username") {
        data.validations.username = ValidatorUserForm.methods.validateUsername(
            data.username
        );
    }
    if (name === "password") {
        data.validations.password = ValidatorUserForm.methods.validatePassword(
            data.password
        );
    }
    if (name === "confirmedPassword") {
        data.validations.confirmedPassword = ValidatorUserForm.methods.confirmPassword(
            data.password, 
            data.confirmedPassword
        );
    }
}