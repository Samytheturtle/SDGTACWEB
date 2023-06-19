import ValidatorBranchForm from '../utils/validation/ValidatorBranchForm.vue';
import getGeolocation from "../utils/servicesGoogle/GeocoderGoogle";
import postBranchAxios from "../logic/PostBranchAxios";

export function validateForm(data){
    data.validations.address = ValidatorBranchForm.methods.validateAddress(
        data.address
    );
    data.validations.name = ValidatorBranchForm.methods.validateName(
        data.name
    );
    data.validations.scheduleWeek = ValidatorBranchForm.methods.validateScheduleWeek(
        data.scheduleWeek
    );
    data.validations.scheduleWeekend = ValidatorBranchForm.methods.validateScheduleWeekend(
        data.scheduleWeekend
    );
    data.validations.map = ValidatorBranchForm.methods.validateLongitude(
        data.marker.position.lat.toString()
    );
    data.validations.map = ValidatorBranchForm.methods.validateLatitude(
        data.marker.position.lng.toString()
    );

    const messages = Object.values(data.validations).filter(
        message => message.length > 0
    );

    return messages;
}

export function handleInputChange(name, data){
    if(name === 'address'){
        data.validations.address = ValidatorBranchForm.methods.validateAddress(
            data.address
        );
    }

    if(name === 'name'){
        data.validations.name = ValidatorBranchForm.methods.validateName(
            data.name
        );
    }

    if(name === 'scheduleWeek'){
        data.validations.scheduleWeek = ValidatorBranchForm.methods.validateScheduleWeek(
            data.scheduleWeek
        );
    }

    if(name === 'scheduleWeekend'){
        data.validations.scheduleWeekend = ValidatorBranchForm.methods.validateScheduleWeekend(
            data.scheduleWeekend
        );
    }
}

export function useGeocoder(location, geoCoderService, marker){
    getGeolocation(location, geoCoderService, marker);
}

export async function postBranch(name, address, lat, lng, scheduleWeek, scheduleWeekend){
    try{
        var data = {
            nombreComercial: name,
            direccion: address,
            latitud: lat,
            longitud: lng,
            horarioLunesviernes: scheduleWeek,
            horarioFinDeSemana: scheduleWeekend
        }
       
        let array = [];
        let promise = postBranchAxios(data);
    
        await promise.then(data => {
            console.log(data);
            array = data;
        });
        
        return array;
    
    }catch(error){
        console.log(error);
    }
}