export default function getScriptGoogle(){
    const key = 'AIzaSyDWD9cVLaRJTqLd3trP7h35B_SW1fgGra4';

    const googleMapScript = document.createElement('script');
    googleMapScript.setAttribute(
        'src', 
        `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`
    );
    googleMapScript.setAttribute('defer', '');
    googleMapScript.setAttribute('async', '');
    document.head.appendChild(googleMapScript);
}