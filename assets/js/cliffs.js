// trailpts
var cliffsSearch=[];

cliffsCluster = new L.MarkerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    disableClusteringAtZoom: 14,
    iconCreateFunction: function (cluster) {
        return new L.DivIcon({
            html: cluster.getChildCount(),
            className: 'cliffsCluster',
            iconSize: new L.Point(45, 45)
        });
    }
});

cliffs = new L.GeoJSON(null, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon:  L.icon({
                iconUrl: 'assets/img/cliffs.png',
                iconSize: [25, 28],
                iconAnchor: [12, 28],
                popupAnchor: [0, -25]
            }),
                title: feature.properties.name
        });
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties) {
            layer.bindPopup("<strong>" + feature.properties.popupinfo + "</strong><br><i>For more information, visit <a href='http://www.adirondackrock.com/' target='_blank_'>Adirondack Rock</a></i><br><br><i>Tip: Turn on imagery to see cliffs.</i>", {
                closeButton: false
            });
        }
        cliffsSearch.push({
            name: layer.feature.properties.popupinfo,
            source: "cliffs",
            id: L.stamp(layer),
            lat: layer.feature.geometry.coordinates[1],
            lng: layer.feature.geometry.coordinates[0]
        });
    }
});

$.getJSON("data/cliffs.geojson", function (data) {
    cliffs.addData(data);
    cliffsCluster.addLayer(cliffs);
});