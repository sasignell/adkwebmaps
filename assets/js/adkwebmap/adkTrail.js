            var adkTrail = new L.GeoJSON(null, {
                style: function (feature) {
                          return {
                            weight: 3,
                            color: 'orangered',
                            dashArray: '6',
                            opacity: 1,
                            clickable: true
                        };        
                },
                onEachFeature: function (feature, layer) {
                    if (feature.properties) {
                        layer.bindPopup(feature.properties.name,  {
                            closeButton: false
                        });
                    }
                }
            });

$.getJSON("data/adkwebmap/adktrail.geojson", function (data) {
    adkTrail.addData(data);
});