<template>
    <div id="map" ref="mapDivRef"></div>
</template>

<script>
import { ref, onBeforeMount, watch } from 'vue';
import getGeolocation from '../utils/servicesGoogle/GeocoderGoogle';
import getScriptGoogle from '../utils/servicesGoogle/InitServicesGoogle';

export default{
    name: 'GoogleMap',
    props:{
        center: { lat: Number, lng: Number },
        zoom: Number,
        mapType: String,
        disableUI: Boolean,
        marker: { 
            position:{
                lat: Number, lng: Number
            }, 
            title: String 
        },
        geoCoderService: Object
    },
    setup(props){
        const map = ref(null);
        const mapDivRef = ref(null);

        let markers = [];

        onBeforeMount(() => {
            getScriptGoogle();
        });

        const clearMarker = () => {
            markers.forEach(marker => {
                marker.setMap(null);
            });
            markers = [];
        }

        const calcMapBounds = () => {
            map.value.setCenter(props.marker.position);
        }

        const loadMapMarker = (marker) => {
            if(!marker) return;
            clearMarker();

            const mapMarker = new google.maps.Marker();
            mapMarker.setPosition(marker.position);
            mapMarker.setMap(map.value);
            mapMarker.setTitle(marker.title);

            mapMarker.infoWindow = new google.maps.InfoWindow();
            mapMarker.infoWindow.setContent(`<h2>${mapMarker.title}</h2>`)

            mapMarker.addListener('click', () => {
                if(mapMarker.infoWindow !== null){
                    mapMarker.infoWindow.open(map.value, mapMarker)
                }
            })

            markers.push(mapMarker);

            calcMapBounds();
        }

        watch(
            props.marker,
            (newMarker) => {
                loadMapMarker(newMarker);
            }
        )

        window.initMap = () => {
            map.value = new google.maps.Map(mapDivRef.value, {
                mapTypeId: props.mapType || 'hybrid',
                zoom: props.zoom || 8,
                disableDefaultUI: props.disableUI || false,
                center: props.center || { 
                    lat: 19.5437751, lng: -96.91018059999999 
                }
            });

            loadMapMarker(props.marker);

            props.geoCoderService.geo = new google.maps.Geocoder();

            map.value.addListener('click', (mapsMouseEvent) => {
                map.value.setCenter(mapsMouseEvent.latLng);
                props.marker.position.lat = mapsMouseEvent.latLng.toJSON().lat;
                props.marker.position.lng = mapsMouseEvent.latLng.toJSON().lng;
                const objectLocation = {
                    location: props.marker.position
                }
                getGeolocation(
                    objectLocation, 
                    props.geoCoderService, 
                    props.marker
                );
            });
        }

        return{
            mapDivRef
        }
    }
}  
</script>

<style scoped>
#map{
    width: 100%;
    height: 300px;
    background-color: azure;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>