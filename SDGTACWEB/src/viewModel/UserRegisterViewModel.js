import ValidatorUserForm from '../utils/validation/ValidatorUserForm.vue';
import getAllBranchAxios from '../logic/BranchAxios.js';
import postUserAxios from '../logic/UserAxios.js';

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

export async function getAllBranch(options){
    let array = [];
    let promise = getAllBranchAxios();

    await promise.then(data => {
        array = data; //Se obtiene directamente el arreglo de sucursales
        array.forEach(branch => {
            options.branches.push({
                value: branch.idSucursal,
                label: branch.nombreComercial
            });
        });
    });   
    return array;
}

export async function postUser(userType, fullName, registerDate, username, password, branch){
    try{
        var data = {
            tipoUsuario: userType,
            nombreCompleto: fullName,
            fechaIngreso: registerDate,
            nombreusuario: username,
            contrasena: password,
            idSucursal: branch
        }
       
        let array = [];
        let promise = postUserAxios(data);
    
        await promise.then(data => {
            array = data;
        });
        
        return array;
    
    }catch(error){
        console.log(error);
    }
}