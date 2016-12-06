// summits
hamlet = new L.GeoJSON(null, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon:  L.icon({
                iconUrl: 'img/adkwebmap/summit.png',
                iconSize: [0, 0],
                iconAnchor: [12, 28],
                popupAnchor: [0, -25]
            }),
            title: feature.properties.name
        });
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties) {
            layer.bindPopup(feature.properties.name , {
                autoPanPadding: new L.Point(5, $('.navbar').height()+5)
            });
        }
        hamletSearch.push({
            value: layer.feature.properties.name,
            tokens: [layer.feature.properties.name],
            layer: "hamlet",
            id: L.stamp(layer),
            lat: layer.feature.geometry.coordinates[1],
            lng: layer.feature.geometry.coordinates[0]
        });
    }
});

$.getJSON("data/adkwebmap/hamlet.geojson", function (data) {
    hamlet.addData(data);
});