// summits
boatLaunch = new L.GeoJSON(null, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon:  boatLaunchIcon,
            title: feature.properties.name
        });
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties) {
            layer.bindPopup(feature.properties.name , {
                closeButton: false
            });
        }
        boatLaunchSearch.push({
            name: layer.feature.properties.name,
            source: "boatLaunch",
            id: L.stamp(layer),
            lat: layer.feature.geometry.coordinates[1],
            lng: layer.feature.geometry.coordinates[0]
        });
    }
});

$.getJSON("data/adkwebmap/boatLaunch.geojson", function (data) {
    boatLaunch.addData(data);
});