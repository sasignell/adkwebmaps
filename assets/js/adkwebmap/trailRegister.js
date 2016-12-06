////////Trail Registers
            var trailRegisterCluster = new L.MarkerClusterGroup({
                spiderfyOnMaxZoom: true,
                showCoverageOnHover: false,
                zoomToBoundsOnClick: true,
                disableClusteringAtZoom: 12,
                iconCreateFunction: function (cluster) {
                    return new L.DivIcon({
                        html: cluster.getChildCount(),
                        className: 'trailRegisterCluster',
                        iconSize: new L.Point(45, 45)
                    });
                }
            });

            var trailRegister = new L.GeoJSON(null, {
                pointToLayer: function (feature, latlng) {
                    return L.marker(latlng, {
                        icon: trailRegisterIcon,
                        title: feature.properties.name
                    });
                },
                onEachFeature: function (feature, layer) {
                    if (feature.properties) {
                        layer.bindPopup(feature.properties.name,  {
                            closeButton: false
                        });
                    }
                }
            });