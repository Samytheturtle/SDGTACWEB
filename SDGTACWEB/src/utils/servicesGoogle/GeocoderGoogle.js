export default function getGeolocation(location, geoCoderService, marker){
    geoCoderService.geo.geocode(location, 
        (results, status) => {
            if(status === 'ZERO_RESULTS'){
                alert('Dirección inexistente. Usa la dirección más próxima.');
            }else if(status === 'OVER_QUERY_LIMIT'){
                alert('Se ha acabado la cuota gratuita. Comuníquese con el equipo IT.');
            }else if(status === 'REQUEST_DENIED'){
                alert('Sin autorización. Comuníquese con el equipo IT.')
            }else if(status === 'INVALID_REQUEST'){
                alert('Necesita registrar los campos marcados con asterisco (*).');
            }else if(status === 'UNKNOWN_ERROR'){
                alert('Error del servidor. Vuelva a intentarlo.');
            }else if(status === 'ERROR'){
                alert('Se acabó el tiempo de espera. Vuelva a intentarlo.');
            }else{
                marker.title = results[0].formatted_address;
                marker.position.lng = results[0].geometry.location.toJSON().lng;
                marker.position.lat = results[0].geometry.location.toJSON().lat;
            }
        }
    );
}