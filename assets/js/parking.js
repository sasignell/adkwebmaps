//Campsite
var parkingCluster = new L.MarkerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    disableClusteringAtZoom: 12,
    iconCreateFunction: function (cluster) {
        return new L.DivIcon({
            html: cluster.getChildCount(),
            className: 'parkingCluster',
            iconSize: new L.Point(45, 45)
        });
    }
});

var parking = new L.GeoJSON(null, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: parkingIcon
        }).bindLabel(feature.properties.name);
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties) {
            layer.bindPopup(feature.properties.name,  {
                closeButton: false
            });
        }
    }
});

$.getJSON("data/parking.geojson", function (data) {
    parking.addData(data);
    parkingCluster.addLayer(parking);
});