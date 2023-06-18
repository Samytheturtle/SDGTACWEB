import getMunicipalitiesAxios from "../logic/MunicipalityAxios";
import getStatesAxios from "../logic/StateAxios";
import getSuburbsAxios from "../logic/SuburbAxios";
import getGeolocation from "../utils/servicesGoogle/GeocoderGoogle";
import ValidatorAddressForm from '../utils/validation/ValidatorAddressForm.vue';
import postAddressAxios from "../logic/AddressAxios";


export async function getStates (options) {
    let array = [];
    let promise = getStatesAxios();

    await promise.then(data => {
        array = data.estados;
        array.forEach(state => {
            options.states.push({
                value: state.ESTADO,
                label: state.ESTADO
            });
        });
    });
    return array;
}

export async function getMunicipalities(options, id){
    let array = [];
    let promise = getMunicipalitiesAxios(id);
    
    await promise.then(data => {
        array = data.municipios;
        array.forEach(municipality => {
            options.municipalities.push({
                value: municipality.MUNICIPIO,
                label: municipality.MUNICIPIO
            });
        });
    });

    return array;
}

export async function getSuburbs(options, municipality){
    let array = [];
    let promise = getSuburbsAxios(municipality);

    await promise.then(data => {
        array = data.colonias;
        array.forEach(suburb => {
            options.suburbs.push({
                value: suburb.COLONIA,
                label: suburb.COLONIA
            });
        });
    });

    return array;
}

export function useGeocoder(location, geoCoderService, marker){
    getGeolocation(location, geoCoderService, marker);
}

export function validateForm(data){
    data.validations.street = ValidatorAddressForm.methods.validateStreet(
        data.street
    );
    data.validations.streetNumber = ValidatorAddressForm.methods.validateStreetNumber(
        data.streetNumber
    );
    data.validations.apartmentNumber = ValidatorAddressForm.methods.validateApartmentNumber(
        data.apartmentNumber
    );
    data.validations.zipcode= ValidatorAddressForm.methods.validateZipcode(
        data.zipcode
    );
    data.validations.suburb = ValidatorAddressForm.methods.validateSuburb(
        data.suburb
    );
    data.validations.municipality = ValidatorAddressForm.methods.validateMunicipality(
        data.municipality
    );
    data.validations.state = ValidatorAddressForm.methods.validateState(
        data.state
    );
    data.validations.map = ValidatorAddressForm.methods.validateLongitude(
        data.marker.position.lat.toString()
    );
    data.validations.map = ValidatorAddressForm.methods.validateLatitude(
        data.marker.position.lng.toString()
    );

    const messages = Object.values(data.validations).filter(
        message => message.length > 0
    );

    return messages;
}

export function handleInputChange(name, data){
    if(name === 'street'){
        data.validations.street = ValidatorAddressForm.methods.validateStreet(
            data.street
        );
    }

    if(name === 'streetNumber'){
        data.validations.streetNumber = ValidatorAddressForm.methods.validateStreetNumber(
            data.streetNumber
        );
    }

    if(name === 'apartmentNumber'){
        data.validations.apartmentNumber = ValidatorAddressForm.methods.validateApartmentNumber(
            data.apartmentNumber
        );
    }

    if(name === 'zipcode'){
        data.validations.zipcode= ValidatorAddressForm.methods.validateZipcode(
            data.zipcode
        );
    }

    if(name === 'suburb'){
        data.validations.suburb = ValidatorAddressForm.methods.validateSuburb(
            data.suburb
        );
    }

    if(name === 'municipality'){
        data.validations.municipality = ValidatorAddressForm.methods.validateMunicipality(
            data.municipality
        );
    }

    if(name === 'state'){
        data.validations.state = ValidatorAddressForm.methods.validateState(
            data.state
        );
    }
}

export async function postAddress(userId, zipcode, state, municipality, suburb, street, streetNumber, 
    apartmentNumber, lat, lng){
    try{
        var data = {
            idUsuario: userId,
            codigoPostal: zipcode,
            estado: state,
            municipio: municipality,
            colonia: suburb,
            calle: street,
            numeroExterior: streetNumber,
            interior: apartmentNumber,
            latitud: lat,
            longitud: lng
        }
       
        let array = [];
        let promise = postAddressAxios(data);
    
        await promise.then(data => {
            console.log("console(data) desde view model")
            console.log(data);
            array = data;
        });
        
        return array;
    
        }catch(error){
            console.log(error);
        }
}