import ValidatorProductForm from '../utils/validation/ValidatorProductForm.vue';
import postUserAxios from '../logic/UserAxios.js';


export function validateForm(data){
    data.validations.category= ValidatorProductForm.methods.validateCategory(
        data.category
    );
    data.validations.barcode = ValidatorProductForm.methods.validateBarcode(
        data.barcode
    );
    data.validations.productName = ValidatorProductForm.methods.validateProductName(
        data.productName
    );
    data.validations.descripion = ValidatorProductForm.methods.validateDescription(
        data.descripion
    );
    data.validations.stock = ValidatorProductForm.methods.validateStock(
        data.stock
    );
    data.validations.price = ValidatorProductForm.methods.validatePrice(
        data.price
    );
    data.validations.image = ValidatorProductForm.methods.validateImage(
        data.image
    );
    
    const messages = Object.values(data.validations).filter(
        message => message.length > 0
    );

    return messages;
}

export function handleInputChange(name, data){
    if (name === "category") {
        data.validations.catogory = ValidatorProductForm.methods.validateCategory(
            data.category
        );
    }
    if (name === "barcode") {
        data.validations.barcode = ValidatorProductForm.methods.validateBarcode(
            data.barcode
        );
    }
    if (name === "productName") {
        data.validations.productName = ValidatorProductForm.methods.validateProductName(
            data.productName
        );
    }
    if (name === "description") {
        data.validations.description = ValidatorProductForm.methods.validateDescription(
            data.description
        );
    }
    if (name === "stock") {
        data.validations.stock = ValidatorProductForm.methods.validateStock(
            data.stock
        );
    }
    if (name === "price") {
        data.validations.price = ValidatorProductForm.methods.validatePrice(
            data.price
        );
    }
    if (name === "image") {
        data.validations.image = ValidatorProductForm.methods.validateImage(
            data.image
        );
    }
}

export async function postProduct(category){
    try{
        var data = {
            categoria: category
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