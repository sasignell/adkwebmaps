            var adkSnowTrail = new L.GeoJSON(null, {
                style: function (feature) {
                          return {
                            weight: 2,
                            color: 'blue',
                            //dashArray: '6',
                            opacity: 1,
                            clickable: true
                        };        
                },
                onEachFeature: function (feature, layer) {
                    if (feature.properties) {
                        layer.bindPopup(feature.properties.tcode1,  {
                            closeButton: false
                        });
                    }
                }
            });

$.getJSON("data/adkwebmap/adksnowmobiletrail.geojson", function (data) {
    adkSnowTrail.addData(data);
});