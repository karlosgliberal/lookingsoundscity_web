$(document).ready(function(){
        var map = L.mapbox.map('map', 'aitor6.iggn3o0g')
            .setView([42.8090541, -1.5936428], 16);
        var marker
        


var julieRef = new Firebase('https://oinez.firebaseio.com/karlos_tarde');
julieRef.on('child_added', function(snapshot) {
 var msgData = snapshot.val();
     marker= L.marker(new L.LatLng(msgData.lat, msgData.lon), {
                  icon: L.mapbox.marker.icon({'marker-color': '55BF0A'}),
                  draggable: true
              });
  marker.bindPopup('numero');
  marker.addTo(map);
});

var julieRef = new Firebase('https://oinez.firebaseio.com/aitor');
julieRef.on('child_added', function(snapshot) {
 var msgData = snapshot.val();
     marker= L.marker(new L.LatLng(msgData.lat, msgData.lon), {
                  icon: L.mapbox.marker.icon({'marker-color': '000000'}),
                  draggable: true
              });
  marker.bindPopup('numero');
  marker.addTo(map);
});




function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

// http://leafletjs.com/reference.html#circle
var circle_options = {
    color: '#fff',      // Stroke color
    opacity: 1,         // Stroke opacity
    weight: 10,         // Stroke weight
    fillColor: '#000',  // Fill color
    fillOpacity: 0.6    // Fill opacity
};

var linea = [
  [42.8136358, -1.5993407],
  [42.8080106, -1.5863411]
]

// Create array of lat,lon points

// Define polyline options
// http://leafletjs.com/reference.html#polyline
var polyline_options = {
    color: '#000'
};

var poloptions = {
    color: 'olive'
};
// Defining a polygon here instead of a polyline will connect the
// endpoints and fill the path.
// http://leafletjs.com/reference.html#polygon
// var polyline = L.polyline(aitor, polyline_options).addTo(map);
var polyline2 = L.polyline(linea, poloptions).addTo(map);


})
