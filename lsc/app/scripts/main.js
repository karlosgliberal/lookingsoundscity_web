$(document).ready(function(){
  var map = L.mapbox.map('map', 'aitor6.iggn3o0g')
            .setView([42.8083665, -1.6646338], 16);
  var marker;

  var circle_options = {
      color: '#ffff00',      // Stroke color
      opacity: 0.7,         // Stroke opacity
      weight: 40,         // Stroke weight
      fillColor: '#ff0000',  // Fill color
      fillOpacity: 0.6    // Fill opacity
  };

  var julieRef = new Firebase('https://oinez.firebaseio.com/karlos_tarde');
  julieRef.on('child_added', function(snapshot) {
    var msgData = snapshot.val();
    var circle_one = L.circle([msgData.lat, msgData.lon], 1, circle_options).addTo(map);
    // marker= L.marker(new L.LatLng(msgData.lat, msgData.lon), {
    //               icon: L.mapbox.marker.icon({'marker-color': '55BF0A'}),
    //               draggable: true
    //           });
    // marker.bindPopup('numero');
    // marker.addTo(map);
});

function deg2rad(deg) {
  return deg * (Math.PI/180)
}



var polyline2 = L.polyline(linea, poloptions).addTo(map);

})
