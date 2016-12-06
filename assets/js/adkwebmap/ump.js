///////////UMPs


var ump = new L.GeoJSON(null, {
    style: {
                clickable: true,
                weight: 0,
                color: 'green',
                opacity: 1,
                fill: true,
                fillOpacity: 0.2

    },

    onEachFeature: function (feature, layer) {
        

        if (feature.properties) {
            
            layer.bindPopup(
                "<strong>" + feature.properties.name + " " + feature.properties.class +
                "<i></br>" + feature.properties.ump_url + "</i>",  {
                closeButton: false
            });
        }

    }
});

$.getJSON("data/adkwebmap/ump.geojson", function (data) {
    ump.addData(data);
});