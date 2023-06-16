import getMunicipalitiesAxios from "../logic/MunicipalityAxios";
import getStatesAxios from "../logic/StateAxios";
import getSuburbsAxios from "../logic/SuburbAxios";
import getGeolocation from "../utils/servicesGoogle/GeocoderGoogle";

export default async function getStates (options) {
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