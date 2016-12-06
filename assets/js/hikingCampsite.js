//Campsite
campsiteCluster = new L.MarkerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    disableClusteringAtZoom: 12,
    iconCreateFunction: function (cluster) {
        return new L.DivIcon({
            html: cluster.getChildCount(),
            className: 'campsiteCluster',
            iconSize: new L.Point(45, 45)
        });
    }
});

var campsite = new L.GeoJSON(null, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: campsiteIcon
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

$.getJSON("data/hikingCampsite.geojson", function(data) {

          campsite.addData(data);
          campsiteCluster.addLayer(campsite);

  });
