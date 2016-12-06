// trailpts
var adktrailPtsSearch=[];

adktrailPts = new L.GeoJSON(null, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon:  L.icon({
                iconUrl: 'assets/img/trailhead.png',
                iconSize: [0, 0],
                iconAnchor: [12, 28],
                popupAnchor: [0, -25]
            })
        });
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties) {
            layer.bindPopup(feature.properties.name, {
                closeButton: false
            });
        }
        adktrailPtsSearch.push({
            name: layer.feature.properties.name,
            source: "adktrailPts",
            id: L.stamp(layer),
            lat: layer.feature.geometry.coordinates[1],
            lng: layer.feature.geometry.coordinates[0]
        });
    }
});

$.getJSON("data/adktrailPts.geojson", function (data) {
    adktrailPts.addData(data);
});