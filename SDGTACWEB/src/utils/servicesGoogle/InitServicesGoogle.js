export default function getScriptGoogle(){
    const key = import.meta.env.VITE_APP_GOOGLEMAPS_KEY;

    const googleMapScript = document.createElement('script');
    googleMapScript.setAttribute(
        'src', 
        `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`
    );
    googleMapScript.setAttribute('defer', '');
    googleMapScript.setAttribute('async', '');
    document.head.appendChild(googleMapScript);
}