// 1. Create a map object.
var mymap = L.map('map', {
  center: [39.8283, -98.5795],
  zoom: 4,
  maxZoom: 10,
  minZoom: 3,
  detectRetina: true
});
// 2. Add a base map.
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(mymap);

// 3. Add cell towers GeoJSON Data
// Null variable that will hold cell tower data
var airports = null;

// 4. build up a set of colors from colorbrewer's dark2 category
var colors = chroma.scale('Dark2').mode('lch').colors(2);

// 5. dynamically append style classes to this page. This style classes will be used for colorize the markers.
for (i = 0; i < 2; i++) {
    $('head').append($("<style> .marker-color-" + (i + 1).toString() + " { color: " + colors[i] + "; font-size: 15px; text-shadow: 0 0 3px #ffffff;} </style>"));
}

// Get GeoJSON and put on it on the map when it loads
airports= L.geoJson.ajax("assets/airports.geojson", {
    pointToLayer: function (feature, latlng) {
        var id = 0;
        if (feature.properties.CNTL_TWR == "Y") { id = 0; }
        else if (feature.properties.CNTL_TWR == "n") { id = 1;} // "Yakima MSA limited partnership"
        return L.marker(latlng, {icon: L.divIcon({className: 'fa fa-signal marker-color-' + (id + 1).toString() })});
    },
    attribution: 'Cell Tower Data &copy; HIFLD | Washington counties &copy; Washington Data & Research | Base Map &copy; CartoDB | Made By Bo Zhao'
}).addTo(mymap);
