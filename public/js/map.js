let center = [21, 79];
if(listing.geometry.coordinates.length != 0){
  center = listing.geometry.coordinates
}
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/dark-v11",
  center: center, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  
  zoom: 9, // starting zoom
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(center)
  .setPopup(
    new mapboxgl.Popup({ offset: 25})
      
      .setHTML(`<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`))
  .addTo(map);

