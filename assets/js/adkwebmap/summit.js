// summits
summits = new L.GeoJSON(null, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon:  L.icon({
                iconUrl: 'img/adkwebmap/summit.png',
                iconSize: [0, 0],
                iconAnchor: [12, 28],
                popupAnchor: [0, -25]
            })
        });
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties) {
            layer.bindPopup(feature.properties.name + "</br>" + feature.properties.elev, {
               closeButton: false
            });
        }
        summitSearch.push({
            name: layer.feature.properties.name,
            source: "summit",
            id: L.stamp(layer),
            lat: layer.feature.geometry.coordinates[1],
            lng: layer.feature.geometry.coordinates[0]
        });
    }
});

$.getJSON("data/adkwebmap/summits.geojson", function (data) {
    summits.addData(data);
});