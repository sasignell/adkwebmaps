var longlakeCluster = new L.MarkerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    disableClusteringAtZoom: 12,
    iconCreateFunction: function (cluster) {
        return new L.DivIcon({
            html: cluster.getChildCount(),
            className: 'longlakeCluster',
            iconSize: new L.Point(45, 45)
        });
    }
});
     // Making the icons
    var PointIcon = L.Icon.extend({
        options: {
            iconSize: [22, 25],
            iconAnchor: [12, 28],
            popupAnchor: [0, -25]
        },
        onEachFeature: function (feature, layer) {
            if (feature.properties) {
                layer.bindPopup(feature.properties.name, {
                    closeButton: false
                });
            }
        }
    });

    var libraryIcon = new PointIcon({iconUrl: 'assets/img/longlake/library.png'});
    var shoppingIcon = new PointIcon({iconUrl: 'assets/img/longlake/shopping.png'});
    var lodgingIcon = new PointIcon({iconUrl: 'assets/img/longlake/lodging.png'});
    var schoolIcon = new PointIcon({iconUrl: 'assets/img/longlake/school.png'});
    var postOfficeIcon = new PointIcon({iconUrl: 'assets/img/longlake/postOffice.png'});
    var townFacilityIcon = new PointIcon({iconUrl: 'assets/img/longlake/townFacility.png'});
    var gasIcon = new PointIcon({iconUrl: 'assets/img/longlake/gas.png'});
    var restaurantIcon = new PointIcon({iconUrl: 'assets/img/longlake/restaurant.png'});
    var trailHeadIcon = new PointIcon({iconUrl: 'assets/img/longlake/trailhead.png'});
    var allPointsIcon = new PointIcon({iconUrl: 'assets/img/longlake/historic.png'});
    var barIcon = new PointIcon({iconUrl: 'assets/img/longlake/bar.png'});
    var boatingIcon = new PointIcon({iconUrl: 'assets/img/longlake/boating.png'});
    var campgroundIcon = new PointIcon({iconUrl: 'assets/img/longlake/campground.png'});
    var churchIcon = new PointIcon({iconUrl: 'assets/img/longlake/church.png'});
    var repairIcon = new PointIcon({iconUrl: 'assets/img/longlake/repair.png'});

               // all Points
    llPoints = new L.GeoJSON(null, {
/*        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: libraryIcon,
                title: feature.properties.point_name
            });
        },
        onEachFeature: function (feature, layer) {
            if (feature.properties) {
                layer.bindPopup(feature.properties.point_name, {
                    closeButton: false
                });
            }
        }*/
        pointToLayer: function (feature, latlng) {
            if (feature.properties.point_category === "Church") {
              return L.marker(latlng, {
                icon: churchIcon,
                title: feature.properties.point_name
            });
          };
        },         
        onEachFeature: function (feature, layer) {
            if (feature.properties) {
                layer.bindPopup(feature.properties.point_name, {
                    closeButton: false
                });
            }
            llPointSearch.push({
                name: layer.feature.properties.point_name,
                source: "llPoints",
                id: L.stamp(layer),
                lat: layer.feature.geometry.coordinates[1],
                lng: layer.feature.geometry.coordinates[0]
            });
        }
    });
    //Load Individual layers
    
    $.getJSON("http://longlake.cartodb.com/api/v2/sql?format=GeoJSON&q=SELECT * FROM points WHERE showonmap='1' AND location='L'", function (data) {
    llPoints.addData(data);
});

    //Load individual Layers

    //Libraries
    var library = new L.GeoJSON(null, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: libraryIcon,
                title: feature.properties.point_name
            });
        },
        onEachFeature: function (feature, layer) {
            if (feature.properties) {
                layer.bindPopup(feature.properties.point_name, {
                    closeButton: false
                });
            }
        }
    });

/*    var libraryLabels = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/longlake/wms", {
      layers: 'fivetowns:library',
      format: 'image/png',
      transparent: true,
      zIndex: 100
    });*/

    //boatings
    var boating = new L.GeoJSON(null, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: boatingIcon,
                title: feature.properties.point_name
            });
        },
        onEachFeature: function (feature, layer) {
            if (feature.properties) {
                layer.bindPopup(feature.properties.point_name, {
                    closeButton: false
                });
            }
        }
    });
  /*
    var boatingLabels = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/longlake/wms", {
      layers: 'fivetowns:boating',
      format: 'image/png',
      transparent: true,
      zIndex: 100
    });*/

    //campground
    var campground = new L.GeoJSON(null, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: campgroundIcon,
                title: feature.properties.point_name
            });
        },
        onEachFeature: function (feature, layer) {
            if (feature.properties) {
                layer.bindPopup(feature.properties.point_name, {
                    closeButton: false
                });
            }
        }
    });
  

      var church = new L.GeoJSON(null, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: churchIcon,
                title: feature.properties.point_name
            });
        },
        onEachFeature: function (feature, layer) {
            if (feature.properties) {
                layer.bindPopup(feature.properties.point_name, {
                    closeButton: false
                });
            }
        }
    });

    /*
    var campgroundLabels = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/longlake/wms", {
      layers: 'fivetowns:campground',
      format: 'image/png',
      transparent: true,
      zIndex: 100
    });*/


    //repair
    var repair = new L.GeoJSON(null, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: repairIcon,
                title: feature.properties.point_name
            });
        },
        onEachFeature: function (feature, layer) {
            if (feature.properties) {
                layer.bindPopup(feature.properties.point_name, {
                    closeButton: false
                });
            }
        }
    });
  /*
    var campgroundLabels = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/longlake/wms", {
      layers: 'fivetowns:campground',
      format: 'image/png',
      transparent: true,
      zIndex: 100
    });*/

    //Restaurants
    var restaurant = new L.GeoJSON(null, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: restaurantIcon,
                title: feature.properties.point_name
            });
        },
        onEachFeature: function (feature, layer) {
            if (feature.properties) {
                layer.bindPopup(feature.properties.point_name, {
                    closeButton: false
                });
            }
        }
    });

/*    var restaurantLabels = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/longlake/wms", {
      layers: 'fivetowns:restaurant',
      format: 'image/png',
      transparent: true,
      zIndex: 100
    });*/

    //Gas stations
    var gas = new L.GeoJSON(null, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: gasIcon,
                title: feature.properties.point_name
            });
        },
        onEachFeature: function (feature, layer) {
            if (feature.properties) {
                layer.bindPopup(feature.properties.point_name, {
                    closeButton: false
                });
            }
        }
    });

/*    var gasLabels = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/longlake/wms", {
      layers: 'fivetowns:gas',
      format: 'image/png',
      transparent: true,
      zIndex: 100
    });*/

    //Post Offices
    var postOffice = new L.GeoJSON(null, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: postOfficeIcon,
                title: feature.properties.point_name
            });
        },
        onEachFeature: function (feature, layer) {
            if (feature.properties) {
                layer.bindPopup(feature.properties.point_name, {
                    closeButton: false
                });
            }
        }
    });


/*    var postOfficeLabels = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/longlake/wms", {
      layers: 'fivetowns:postoffice',
      format: 'image/png',
      transparent: true,
      zIndex: 100
    });*/

    //Town Facilities
    var townFacility = new L.GeoJSON(null, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: townFacilityIcon,
                title: feature.properties.point_name
            });
        },
        onEachFeature: function (feature, layer) {
            if (feature.properties) {
                layer.bindPopup(feature.properties.point_name, {
                    closeButton: false
                });
            }
        }
    });

/*    var townFacilityLabels = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/longlake/wms", {
      layers: 'fivetowns:townfacility',
      format: 'image/png',
      transparent: true,
      zIndex: 100
    });*/

    //Schools
    var school = new L.GeoJSON(null, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: schoolIcon,
                title: feature.properties.point_name
            });
        },
        onEachFeature: function (feature, layer) {
            if (feature.properties) {
                layer.bindPopup(feature.properties.point_name, {
                    closeButton: false
                });
            }
        }
    });

/*    var schoolLabels = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/longlake/wms", {
      layers: 'fivetowns:school',
      format: 'image/png',
      transparent: true,
      zIndex: 100
    });*/

    //Lodging
    var lodging = new L.GeoJSON(null, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: lodgingIcon,
                title: feature.properties.point_name
            });
        },
        onEachFeature: function (feature, layer) {
            if (feature.properties) {
                layer.bindPopup(feature.properties.point_name, {
                    closeButton: false
                });
            }
        }
    });

/*    var lodgingLabels = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/longlake/wms", {
      layers: 'fivetowns:lodging',
      format: 'image/png',
      transparent: true,
      zIndex: 100
    });*/

    //Shopping
    var shopping = new L.GeoJSON(null, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: shoppingIcon,
                title: feature.properties.point_name
            });
        },
        onEachFeature: function (feature, layer) {
            if (feature.properties) {
                layer.bindPopup(feature.properties.point_name, {
                    closeButton: false
                });
            }
        }
    });



