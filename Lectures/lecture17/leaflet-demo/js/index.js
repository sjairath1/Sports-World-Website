//initialize map:
const mymap = L.map('mapid').setView([42.0454106, -87.733998], 13);

//initialize tiles (there are many options):
L.tileLayer.provider('Stamen.TonerLite').addTo(mymap);
// L.tileLayer.provider('Stamen.Watercolor').addTo(mymap);
// L.tileLayer.provider('Stamen.Terrain').addTo(mymap);
// L.tileLayer.provider('Stamen.TerrainBackground').addTo(mymap);
// L.tileLayer.provider('Stamen.Toner').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerBackground').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerHybrid').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerLines').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerLabels').addTo(mymap);


// access data from this url: 
// https://www.apitutor.org/yelp/simple/v3/businesses/search?location=Chicago, IL')

const marker = L.marker([42.0454106, -87.733998]).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.");


// // create circle:
// const circle = L.circle([51.5, -0.09], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(mymap);
