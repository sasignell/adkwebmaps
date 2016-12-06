var map,trailHeadSearch = [],raquetteLakeSearch = [],longLakeSearch = [];


var longLakeBoundary = new L.GeoJSON(null, {
    style: function (feature) {
              return {
                weight: 2,
                color: 'black',
                opacity: 1,
                fillOpacity: 0,
                clickable: false
            };        
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties) {
             
        }
    }
});

$.getJSON("data/longLake/longLakeBoundary.geojson", function (data) {
   longLakeBoundary.addData(data);
});

var allButLongLake = new L.GeoJSON(null, {
    style: function (feature) {
              return {
                weight: 3,
                color: 'black',
                opacity: 0,
                fillOpacity: .20,
                clickable: false
            };        
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties) {
             
        }
    }
});

$.getJSON("data/longLake/allButLongLake.geojson", function (data) {
   allButLongLake.addData(data);
});

var longLakeBoundaryLayerGroup = new L.LayerGroup([
        longLakeBoundary, 
        allButLongLake
    ]);
////SNOWMOBILE TRAILS

var nysnowmobile = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/longlake/wms", {
  layers: 'longlake:nyminusllsnowmb',
  format: 'image/png',
  transparent: true,
  opacity:0.5,
  zIndex: 100
});

var llsnowmobile = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/longlake/wms", {
  layers: 'longlake:snowmobiletrails',
  format: 'image/png',
  transparent: true,
  zIndex: 100
});

var snowmobileLayerGroup = new L.LayerGroup([
        llsnowmobile, 
        nysnowmobile
    ]);


//NFCT
var nfct = new L.GeoJSON(null, {
    style: function (feature) {
              return {
                weight: 3,
                color: 'blue',
                dashArray: '10',
                opacity: 1,
                clickable: true
            };        
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties) {
             layer.bindPopup('<a href="http://www.northernforestcanoetrail.org/" target="_blank_"><img  class="img-responsive inline-block" width="170px" src="assets/img/longLake/nfctLogo.png"></a>'+ '<h5><strong>Section Name: <br></strong> ' + feature.properties.name , {
                closeButton: false
            })
            layer.bindLabel('Northern Forest Canoe Trail')
        }
    }
});

$.getJSON("data/longLake/nfct.geojson", function (data) {
   nfct.addData(data);
});

////HIKING TRAILS////
var otherTrails = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/ny/wms", {
  layers: 'ny:dec_hiking',
  format: 'image/png',
  opacity:0.7,
  transparent: true,
  zIndex:2

});

var otherTrails_edits = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/adk/wms", {
  layers: 'adk:dec_roads_trails_edits',
  format: 'image/png',
  transparent: true,
  opacity:0.7,
  zIndex:2

});

var sltLayerGroup = L.layerGroup([otherTrails,otherTrails_edits]);

var hikingTrails = new L.GeoJSON(null, {
    style: function (feature) {
              return {
                weight: 3,
                color: 'brown',
                dashArray: '6',
                opacity: 1,
                clickable: true
            };        
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties) {
             layer.bindPopup('<a href="http://mylonglake.com" target="_blank_"><img  class="img-responsive inline-block" width="70px" src="assets/img/longLake/LongRaquetteLogo.jpg"></a>'+ '<h5><strong>' + feature.properties.name + '</strong></h5>Hiking Trail</br>' , {
                closeButton: false
        })
             layer.bindLabel(feature.properties.name);
        }
    }
});

$.getJSON("https://longlake.cartodb.com/api/v1/sql?filename=hikingtrails&q=select+*+from+hikingtrails&format=geojson", function (data) {
   hikingTrails.addData(data);
});




var trailHead = new L.GeoJSON(null, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: L.icon({
                            iconUrl: 'assets/img/longLake/Trailhead.png',
                            iconSize: [22, 25],
                            iconAnchor: [12, 28],
                            popupAnchor: [0, -25]
                        }),
            opacity:0.95,
            title: feature.properties.name
        }).bindLabel(feature.properties.name)
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties) {
            layer.bindPopup('<a href="http://mylonglake.com" target="_blank_"><img  class="img-responsive inline-block" width="70px" src="assets/img/longLake/LongRaquetteLogo.jpg"></a>'+ '<h5><strong>' + feature.properties.name + ' Trailhead</strong></h5>Hiking Trail</br>'+ 'Difficulty: ' + feature.properties.difficulty , {
                closeButton: false
        });
        }
        trailHeadSearch.push({
            name: layer.feature.properties.name,
            source: "trailHead",
            id: L.stamp(layer),
            lat: layer.feature.geometry.coordinates[1],
            lng: layer.feature.geometry.coordinates[0]
        });
    }
});

$.getJSON("https://longlake.cartodb.com/api/v1/sql?filename=trailheads&q=select+*+from+trailheads&format=geojson", function (data) {
   trailHead.addData(data);
});

var hikingLayerGroup = new L.LayerGroup([
        trailHead, 
        hikingTrails
    ]);

//Long Lake
var longLakeCluster = new L.MarkerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    disableClusteringAtZoom: 15,
    iconCreateFunction: function (cluster) {
        return new L.DivIcon({
            html: cluster.getChildCount(),
            className: 'longLakeCluster',
            iconSize: new L.Point(55, 60)
        });

    }
});

//long lake icons
longLake = new L.GeoJSON(null, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon:  L.icon({
                iconUrl: 'assets/img/longLake/' + feature.properties.category + '.png',
                iconSize: [22, 25],
                iconAnchor: [12, 28],
                popupAnchor: [0, -25]
            })
        }).bindLabel(feature.properties.name);
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties) {
            layer.bindPopup('<a href="http://mylonglake.com" target="_blank_"><img  class="img-responsive inline-block" width="70px" src="assets/img/longLake/LongLakeBearLogo.jpg"></a>'+ '<h5><strong>' + feature.properties.name + '</strong></h5>'+ feature.properties.category + '<br>Phone: ' + feature.properties.phone + '<br><a href="http://' + feature.properties.url + '" target="_blank_">'+ feature.properties.url + '</a>', {
                closeButton: false
        });
    }
    longLakeSearch.push({
            name: layer.feature.properties.name,
            source: "longLake",
            id: L.stamp(layer),
            lat: layer.feature.geometry.coordinates[1],
            lng: layer.feature.geometry.coordinates[0]
        });
    }
});

$.getJSON("http://longlake.cartodb.com/api/v2/sql?format=GeoJSON&q=SELECT * FROM points WHERE showonmap='1' AND location='L'", function(data) {     
    longLake.addData(data);
    longLakeCluster.addLayer(longLake);
  });







//Raquette Lake
var raquetteLakeCluster = new L.MarkerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    disableClusteringAtZoom: 12,
    iconCreateFunction: function (cluster) {
        return new L.DivIcon({
            html: cluster.getChildCount(),
            className: 'raquetteLakeCluster',
            iconSize: new L.Point(65, 46)
        });
    }
});


raquetteLake = new L.GeoJSON(null, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon:  L.icon({
                iconUrl: 'assets/img/longLake/' + feature.properties.category + '.png',
                iconSize: [22, 25],
                iconAnchor: [12, 28],
                popupAnchor: [0, -25]
            })
        }).bindLabel(feature.properties.name);
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties) {
            layer.bindPopup('<a href="http://mylonglake.com" target="_blank_"><img  class="img-responsive inline-block" width="90" src="assets/img/longLake/raquetteLakeLoonLogo.jpg"></a>'+'<h5><strong>' + feature.properties.name + '</strong></h5>'+ feature.properties.category + '<br>Phone: ' + feature.properties.phone + '<br><a href="http://' + feature.properties.url + '" target="_blank_">'+ feature.properties.url + '</a>', {
                closeButton: false
        });
    }
    raquetteLakeSearch.push({
            name: layer.feature.properties.name,
            source: "raquetteLake",
            id: L.stamp(layer),
            lat: layer.feature.geometry.coordinates[1],
            lng: layer.feature.geometry.coordinates[0]
        });
    }
});

$.getJSON("http://longlake.cartodb.com/api/v2/sql?format=GeoJSON&q=SELECT * FROM points WHERE showonmap='1' AND location='R'", function(data) {     
    raquetteLake.addData(data);
    raquetteLakeCluster.addLayer(raquetteLake);

  });

map = L.map("map", {
    //zoom: 10,
    //center: [43.9504005, -74.283802 ],
    minZoom: 6,
    maxZoom: 18,
    layers: [blueline,longLakeCluster,  raquetteLakeCluster,hikingLayerGroup,snowmobileLayerGroup,nfct,longLakeBoundaryLayerGroup,sltLayerGroup]

});
    mapquestOSM.addTo(map);
    map.attributionControl.setPrefix('Map by <a href="http://frontierspatial.com" target="_blank">Frontier Spatial | </a>Bootleaf template by <a href="http://bryanmcbride.com" target="_blank">Bryan McBride</a>');

    // Larger screens get expanded layer control
    if (document.body.clientWidth <= 767) {
        var isCollapsed = true;
    } else {
        var isCollapsed = false;
    };

    var baseLayers = {
        "Streets": mapquestOSM,
        "Terrain": topo,
        "Imagery": mapquestHYB
    };

    var overlays = {
        
        "<img src='assets/img/longLake/LongLakeBearLogo.jpg' width='25'>&nbsp;<strong>Businesses & Attractions</strong>": longLakeCluster,
        "<img src='assets/img/longLake/raquetteLakeLoonLogo.jpg' width='35' >&nbsp;<strong>Businesses & Attractions</strong>": raquetteLakeCluster,
        "<img height='21' width='18' src='assets/img/longLake/hikingTrail.png'>&nbsp;<strong>Recommended Hikes</strong>":hikingLayerGroup,
        "<img height='21' width='18' src='assets/img/longLake/snowmobileTrail.png'>&nbsp;<strong>Snowmobile Trails</strong>":snowmobileLayerGroup,       
        "<img height='21' width='18' src='assets/img/longLake/slt.png'>&nbsp;<strong>Other Trails (DEC)</strong>":sltLayerGroup,
        "<img height='21' width='18' src='assets/img/longLake/nfct.png'>&nbsp;<strong>Northern Forest Canoe Trail</strong>":nfct,
        "<img height='18' width='18' src='assets/img/longLake/longLakeBoundary.png'>&nbsp;<strong>Long Lake Township</strong>":longLakeBoundaryLayerGroup

    };

map.on('moveend ', function(e) {
     if ( map.getZoom() < 12 ){ map.removeLayer(trailHead)}
     else if ( map.getZoom() >= 12 ){ map.addLayer( trailHead )}
});


    //geocoder
/*    var osmGeocoder = new L.Control.OSMGeocoder({
            collapsed: false,
            position: 'bottomright',
            text: 'Find Address',
            });
    map.addControl(osmGeocoder);*/

    var layerControl = L.control.layers(baseLayers, overlays, {
        collapsed: isCollapsed,
        autoZIndex: true
    }).addTo(map);

    L.control.locate().addTo(map);
    // create control and add to map
    //var lc = L.control.locate().addTo(map);
    /*var sidebar = L.control.sidebar("sidebar", {
        closeButton: true,
        position: "left"
    }).addTo(map);*/

    // Highlight search box text on click
    $("#searchbox").click(function () {
        $(this).select();
    });

    // Typeahead search functionality
 $(document).one("ajaxStop", function () {
        $("#loading").hide();
        map.fitBounds(longLakeBoundary.getBounds());

        var trailHeadBH = new Bloodhound({
            name: "trailHead",
            datumTokenizer: function (d) {
                return Bloodhound.tokenizers.whitespace(d.name);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: trailHeadSearch,
            limit: 10
        });

        var longLakeBH = new Bloodhound({
            name: "longLake",
            datumTokenizer: function (d) {
                return Bloodhound.tokenizers.whitespace(d.name);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: longLakeSearch,
            limit: 10
        });        

        var raquetteLakeBH = new Bloodhound({
            name: "raquetteLake",
            datumTokenizer: function (d) {
                return Bloodhound.tokenizers.whitespace(d.name);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: raquetteLakeSearch,
            limit: 10
        });  


        
        longLakeBH.initialize();
        raquetteLakeBH.initialize();
        trailHeadBH.initialize();


        // instantiate the typeahead UI
        $("#searchbox").typeahead({
            minLength: 3,
            highlight: true,
            hint: false
        }, {
            name: "longLake",
            displayKey: "name",
            source: longLakeBH.ttAdapter(),
            templates: {
                header: "<h4 class='typeahead-header'><img src='assets/img/longLake/LongLakeBearLogo.jpg' width='42' height='42'></h4>"
            }
        }, {
            name: "raquetteLake",
            displayKey: "name",
            source: raquetteLakeBH.ttAdapter(),
            templates: {
                header: "<h4 class='typeahead-header'><img src='assets/img/longLake/raquetteLakeLoonLogo.jpg' width='62' height='49'></h4>"
            }
        }, {
            name: "trailHead",
            displayKey: "name",
            source: trailHeadBH.ttAdapter(),
            templates: {
                header: "<h4 class='typeahead-header'><img  src='assets/img/longLake/Trailhead.png' width='32'></h4>"
            }
        }/*, {
            name: "washingtonCounty",
            displayKey: "name",
            source: washingtonCountyBH.ttAdapter(),
            templates: {
                header: "<h4 class='typeahead-header'><img src='assets/img/washingtonCounty/wct_logo.png' width='75' height='41'></h4>"
            }
        }*/
        ).on("typeahead:selected", function (obj, datum) {
            if (datum.source === "trailHead") {
                if (!map.hasLayer(trailHead)) {
                    map.addLayer(trailHead);
                    };
                    map.setView([datum.lat, datum.lng], 15);
                    if (map._layers[datum.id]) {
                        map._layers[datum.id].fire("click");
                    };
            };
            if (datum.source === "longLake") {
                if (!map.hasLayer(longLakeCluster)) {
                    map.addLayer(longLakeCluster);
                    };
                    map.setView([datum.lat, datum.lng], 17);
                    if (map._layers[datum.id]) {
                        map._layers[datum.id].fire("click");
                    };
            };

            if (datum.source === "raquetteLake") {
               if (!map.hasLayer(raquetteLakeCluster)) {
                    map.addLayer(raquetteLakeCluster);
                    };
                    map.setView([datum.lat, datum.lng], 17);
                    if (map._layers[datum.id]) {
                        map._layers[datum.id].fire("click");
                    };
            };

            
            if ($(".navbar-collapse").height() > 50) {
                $(".navbar-collapse").collapse("hide");
            };
        }).on("typeahead:opened", function () {
            $(".navbar-collapse.in").css("max-height", $(document).height() - $(".navbar-header").height());
            $(".navbar-collapse.in").css("height", $(document).height() - $(".navbar-header").height());
        }).on("typeahead:closed", function () {
            $(".navbar-collapse.in").css("max-height", "");
            $(".navbar-collapse.in").css("height", "");
        });
        $(".twitter-typeahead").css("position", "static");
        $(".twitter-typeahead").css("display", "block");
    });

