//leantos
var leantoCluster = new L.MarkerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    disableClusteringAtZoom: 12,
    iconCreateFunction: function (cluster) {
        return new L.DivIcon({
            html: cluster.getChildCount(),
            className: 'leantoCluster',
            iconSize: new L.Point(45, 45)
        });
    }
});




var leanto = new L.GeoJSON(null, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: leantoIcon,
            title: feature.properties.name
        });
    },
    onEachFeature: function (feature, layer) {

        if (feature.properties) {
                layer.bindPopup(feature.properties.name,  {
                    closeButton: false
                });
        }
/*        leantoSearch.push({
            name: layer.feature.properties.name,
            source: "leanto",
            id: L.stamp(layer),
            lat: layer.feature.geometry.coordinates[1],
            lng: layer.feature.geometry.coordinates[0]
        });*/
    }
});

$.getJSON("data/adkwebmap/leanto.geojson", function(data) {     
    //allPoints.addData(data);

          leanto.addData(data);
          leantoCluster.addLayer(leanto);

});