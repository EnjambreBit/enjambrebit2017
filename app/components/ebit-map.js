import Component from '@ember/component';

export default Component.extend({
  tagName: "",
  // This example creates a simple polygon representing the Bermuda Triangle.

  initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: { lat: -34.617, lng: -58.4458736 },
      mapTypeId: "terrain"
    });

    // Define the LatLng coordinates for the polygon's path.
    var triangleCoords = [
      { lat: -34.607367, lng: -58.46269 },
      { lat: -34.604479, lng: -58.458447 },
      { lat: -34.607613, lng: -58.44625 },
      { lat: -34.605593, lng: -58.439303 },
      { lat: -34.602667, lng: -58.433348 },
      { lat: -34.605935, lng: -58.43066 },
      { lat: -34.615454, lng: -58.430028 },
      { lat: -34.61509, lng: -58.429257 },
      { lat: -34.626988, lng: -58.426754 },
      { lat: -34.630625, lng: -58.451546 },
      { lat: -34.607367, lng: -58.46269 }
    ];

    // Construct the polygon.
    var bermudaTriangle = new google.maps.Polygon({
      paths: triangleCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.4,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.15
    });
    bermudaTriangle.setMap(map);
  },
  didInsertElement() {
    this.initMap();
  }
});
