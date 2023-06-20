import ValidatorProductForm from '../utils/validation/ValidatorProductForm.vue';
import postProductAxios from '../logic/ProductAxios.js';


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
    data.validations.description = ValidatorProductForm.methods.validateDescription(
        data.description
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

export async function postProduct(category, barcode, productName, description, stock, price, image){
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODcyNzgzNTYsImV4cCI6MTY4NzI4MTk1Nn0.C0Q9j8fnORlclqygocSdGJCqH9S2RnuPJEmI2mFXUjI" ;

    try{
        var data = {
            idCategoria: category,
            codigoBarras: barcode,
            nombre: productName, 
            descripcion: description, 
            existencias: stock, 
            precio: price,
            imagenProducto: image
        }
       
        let array = [];
        let promise = postProductAxios(data, token);
    
        await promise.then(data => {
            array = data;
        });
        
        return array;
    
    }catch(error){
        console.log(error);
    }
}