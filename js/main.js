
    var airport_map = L.map('map', {
      center: [39.8283, -98.5795],
      zoom: 4,
      maxZoom: 10,
      minZoom: 3,
      detectRetina: true
    });

    L.tileLayer('http://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png').addTo(airport_map);


    var airports = null;


    var colors = chroma.scale('rdbu').mode('lch').colors(13);


    for (i = 0; i < 11; i++) {
        $('head').append($("<style> .marker-color-" + (i + 1).toString() + " { color: " + colors[i] + "; font-size: 15px; text-shadow: 0 0 3px #ffffff;} </style>"));
    }


        airports = L.geoJson.ajax("assets/airports.geojson", {
          onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.AIRPT_NAME);
          },

            pointToLayer: function (feature, latlng) {
                var id = 0;
                if (feature.properties.CNTL_TWR == "Y") { id = 0; }
                else if (feature.properties.CNTL_TWR == "N")  { id = 10; }
                return L.marker(latlng, {icon: L.divIcon({className: 'fa fa-plane marker-color-' + (id + 1).toString() })});
            },
            attribution: 'Airport Data &copy; Data.Gov | US States &copy; Mike Bostock | Base Map &copy; CartoDB | Made By Bridget Haney (with code structure from Bo Zhao)'
        }).addTo(airport_map);

        states = L.geoJson.ajax("assets/us-states.geojson");
        states.addTo(airport_map);


        colors = chroma.scale('YlOrRd').colors(6);

      function setColor(density) {
          var id = 0;
          if (density > 31) { id = 5; }
          else if (density > 24 && density <= 31) { id = 4; }
          else if (density > 16 && density <= 24) { id = 3; }
          else if (density > 8 &&  density <= 16) { id = 2; }
          else  { id = 1; }
          return colors[id];
      }

      function style(feature) {
        return {
            fillColor: setColor(feature.properties.count),
            fillOpacity: 0.4,
            weight: 2,
            opacity: 1,
            color: '#b4b4b4',
        };
      }

      L.geoJson.ajax("assets/us-states.geojson", {
          style: style
      }).addTo(airport_map);


      var legend = L.control({position: 'topright'});


      legend.onAdd = function () {


          var div = L.DomUtil.create('div', 'legend');
          div.innerHTML += '<b>Number of Airports per State</b><br />';
          div.innerHTML += '<i style="background: ' + colors[5] + '; opacity: 0.5"></i><p>32+</p>';
          div.innerHTML += '<i style="background: ' + colors[4] + '; opacity: 0.5"></i><p>24-31</p>';
          div.innerHTML += '<i style="background: ' + colors[3] + '; opacity: 0.5"></i><p>17-24</p>';
          div.innerHTML += '<i style="background: ' + colors[2] + '; opacity: 0.5"></i><p>9-16</p>';
          div.innerHTML += '<i style="background: ' + colors[1] + '; opacity: 0.5"></i><p>0-8</p>';
          div.innerHTML += '<hr><b>Airport Control Tower<b><br />';
          div.innerHTML += '<i class="fa fa-plane marker-color-1"></i><p> Control Tower</p>';
          div.innerHTML += '<i class="fa fa-plane marker-color-10"></i><p> No Control Tower </p>';

          return div;
      };


        legend.addTo(airport_map);


        L.control.scale({position: 'bottomleft'}).addTo(airport_map);

        L.control.ruler().addTo(airport_map);
