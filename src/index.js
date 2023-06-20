console.log("first")

// let map = L.map('map').setView([51.505, -0.09], 13);

// let osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   maxZoom: 19,
//   attribution: '&copy; OpenStreetMap'
// }).addTo(map);



fetch(
  "https://geo.stat.fi/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=tilastointialueet:kunta4500k&outputFormat=json&srsName=EPSG:4326"
)
  .then((response) => response.json())
  .then((data) => {
    // Use the GeoJSON data here
    createMap(data); // Call the createMap function passing the GeoJSON data
  })
  .catch((error) => {
    console.error("Error fetching GeoJSON data:", error);
  });

  function createMap(geoJSONData) {
    const map = L.map("map", {
      minZoom: -3,
    });

    const geoJSONLayer = L.geoJSON(geoJSONData, {
      weight: 2,
    }).addTo(map);
  
    map.fitBounds(geoJSONLayer.getBounds());

  }