// summits
var campgroundSearch=[];

campground = new L.GeoJSON(null, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon:  campgroundIcon,
            title: feature.properties.name
        });
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties) {
            layer.bindPopup(feature.properties.name , {
               closeButton: false
            });
        }
        campgroundSearch.push({
            name: layer.feature.properties.name,
            source: "campground",
            id: L.stamp(layer),
            lat: layer.feature.geometry.coordinates[1],
            lng: layer.feature.geometry.coordinates[0]
        });
    }
});

$.getJSON("data/campground.geojson", function (data) {
    campground.addData(data);
});