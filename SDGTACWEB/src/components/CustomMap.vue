<template>
    <div>
        <l-map 
            ref="map" 
            v-model:zoom="zoom" 
            :center="[47.41322, -1.219482]"
        >
            <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                layer-type="base"
                name="OpenStreetMap"
            ></l-tile-layer>
            <l-geo-json 
                :geojson="geojson" 
                :options-style="geoStyler"
            ></l-geo-json>
        </l-map>
    </div>
</template>
  
<script>
import "leaflet/dist/leaflet.css";
import {  LGeoJson, LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
  
export default {
    components: {
        LGeoJson,
        LMap,
        LTileLayer,
    },
    data() {
        return {
            zoom: 2,
            geojson: undefined,
            geoStyler: (feature) => (
                console.log(feature), {
                opacity: 1
            })
        };
    },
    async created() {
        this.geojson = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
};
    },
};
</script>
  
<style></style>