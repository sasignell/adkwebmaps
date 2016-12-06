var map,aatvSearch = [],raquetteLakeSearch = [],longLakeSearch = [], newcombSearch=[],washingtonCountySearch = [];




//Long Lake
var longLakeCluster = new L.MarkerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    disableClusteringAtZoom: 12,
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
            }),
            title:feature.properties.name
        })/*.bindLabel(feature.properties.name)*/;
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
            }),
            title:feature.properties.name
        })/*.bindLabel(feature.properties.name)*/;
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

//Newcomb
//Newcomb
var newcombCluster = new L.MarkerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    disableClusteringAtZoom: 12,
    iconCreateFunction: function (cluster) {
        return new L.DivIcon({
            html: cluster.getChildCount(),
            className: 'newcombCluster',
            iconSize: new L.Point(65, 80)
        });
    }
});


newcomb = new L.GeoJSON(null, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon:  L.icon({
                iconUrl: 'assets/img/newcomb/' + feature.properties.category + '.png',
                iconSize: [25, 29],
                iconAnchor: [12, 28],
                popupAnchor: [0, -25]
            }),
            title:feature.properties.name
        })/*.bindLabel(feature.properties.name)*/;
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties) {
            layer.bindPopup('<a href="http://www.newcombny.com/" target="_blank_"><img  class="img-responsive inline-block" width="70px" src="assets/img/newcomb/newcombLogo.png"></a>'+ '<h5><strong>' + feature.properties.name + '</strong></h5>'+ feature.properties.category, {
                closeButton: false
        });
    }
    newcombSearch.push({
            name: layer.feature.properties.name,
            source: "newcomb",
            id: L.stamp(layer),
            lat: layer.feature.geometry.coordinates[1],
            lng: layer.feature.geometry.coordinates[0]
        });
    }
});

$.getJSON("http://frontier-spatial.cartodb.com/api/v2/sql?format=GeoJSON&q=SELECT * FROM newcomb_points ORDER BY category, name", function(data) {     
    newcomb.addData(data);
    newcombCluster.addLayer(newcomb);
  });

//Washington County
var washingtonCountyCluster = new L.MarkerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    disableClusteringAtZoom: 12,
    iconCreateFunction: function (cluster) {
        return new L.DivIcon({
            html: cluster.getChildCount(),
            className: 'washingtonCountyCluster',
            iconSize: new L.Point(61, 33)
        });
    }
});

washingtonCounty = new L.GeoJSON(null, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon:  L.icon({
                iconUrl: 'assets/img/washingtonCounty/' + feature.properties.CATEGORY + '.png',
                iconSize: [22, 25],
                iconAnchor: [12, 28],
                popupAnchor: [0, -25]
            }),
            title:feature.properties.name
        })/*.bindLabel(feature.properties.name)*/;
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties) {
            layer.bindPopup('<a href="http://www.washingtonnycounty.com/maps/" target="_blank_"><img  class="img-responsive inline-block" width="180px" src="assets/img/washingtonCounty/wct_logo.png"></a>'+ '<h5><strong>' + feature.properties.name + '</strong></h5>'+ feature.properties.CATEGORY + '<br>Phone: ' + feature.properties.phone + '<br> <a href="' + feature.properties.website + '" target="_blank_">'+ feature.properties.website + '</a>', {
                closeButton: false
        });
    }
    washingtonCountySearch.push({
            name: layer.feature.properties.name,
            source: "washingtonCounty",
            id: L.stamp(layer),
            lat: layer.feature.geometry.coordinates[1],
            lng: layer.feature.geometry.coordinates[0]
        });
    }
});


$.ajax({
    type: "GET",
    url: "proxy.php?a=" + "http://www.jimapco.com/maproom/washingtonnycounty/data/sqlite/washingtonnycounty-geojson.php?geotable=washingtonnycounty&fields=OGC_FID,code,name,location,city,photo,category,informatio&orderby=washingtonnycounty.name&geomfield=GEOMETRY" + "&callback=?",
    dataType: "json",

    success: function(data){
        washingtonCounty.addData(data);
        washingtonCountyCluster.addLayer(washingtonCounty);
        
    },
  error: function() {
    alert("Error tripped");
  }
});


// Adirondack Partnership
var aatvCluster = new L.MarkerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    disableClusteringAtZoom: 12,
    iconCreateFunction: function (cluster) {
        return new L.DivIcon({
            html: cluster.getChildCount(),
            className: 'aatvCluster',
            iconSize: new L.Point(43, 43)
        });
    }
});


aatv = new L.GeoJSON(null, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon:  L.icon({
                iconUrl: 'assets/img/aatv/' + feature.properties.category + '.png',
                iconSize: [22, 25],
                iconAnchor: [12, 28],
                popupAnchor: [0, -25]
            }),
            title:feature.properties.name
        })/*.bindLabel(feature.properties.name)*/;
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties) {
            layer.bindPopup('<a href="http://aatvny.org/content/Generic/View/18" target="_blank_"><img  class="img-responsive inline-block" width="70px" src="assets/img/aatv/adirondackPartnershipLogo.jpg"></a><h5><strong>' + feature.properties.name + '</strong></h5>'+ feature.properties.description + '<br><a href="' + feature.properties.weblink + '" target="_blank_">' + feature.properties.weblink + '</a>', {
                closeButton: false
        });
    }
    aatvSearch.push({
            name: layer.feature.properties.name,
            source: "aatv",
            id: L.stamp(layer),
            lat: layer.feature.geometry.coordinates[1],
            lng: layer.feature.geometry.coordinates[0]
        });
    }
});

$.getJSON("http://frontier-spatial.cartodb.com/api/v2/sql?format=GeoJSON&q=SELECT * FROM tourism_assets_11_26_13 WHERE category != 'outfitter' ORDER BY category, name", function(data) {     
    aatv.addData(data);
    aatvCluster.addLayer(aatv);

  });


map = L.map("map", {
    zoom: 8,
    center: [43.9504005, -74.283802 ],
    minZoom: 6,
    maxZoom: 17,
    layers: [blueline,longLakeCluster,  raquetteLakeCluster,washingtonCountyCluster, aatvCluster,newcombCluster]

});
    topo.addTo(map);
    map.attributionControl.setPrefix('Website by <a href="http://frontierspatial.com" target="_blank">Frontier Spatial | </a>Bootleaf template by <a href="http://bryanmcbride.com" target="_blank">Bryan McBride</a>');

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
        
        "<img src='assets/img/longLake/LongLakeBearLogo.jpg' width='60' height='60'>": longLakeCluster,
        "<img src='assets/img/longLake/raquetteLakeLoonLogo.jpg' width='80' height='60'>": raquetteLakeCluster, 
        "<img src='assets/img/washingtonCounty/wct_logo.png' width='90' height='50'>": washingtonCountyCluster,"<img src='assets/img/newcomb/newcombCluster.png' width='75'>": newcombCluster,
        "<img src='assets/img/aatv/adirondackPartnershipLogo.jpg' width='60' height='80'>": aatvCluster            
    };

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
        
            $('#aboutModal').modal('show');
        
        $("#loading").hide();
        map.fitBounds(blueline.getBounds());

        var aatvBH = new Bloodhound({
            name: "aatv",
            datumTokenizer: function (d) {
                return Bloodhound.tokenizers.whitespace(d.name);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: aatvSearch,
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

        var washingtonCountyBH = new Bloodhound({
            name: "washingtonCounty",
            datumTokenizer: function (d) {
                return Bloodhound.tokenizers.whitespace(d.name);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: washingtonCountySearch,
            limit: 10
        });  

        var newcombBH = new Bloodhound({
            name: "newcomb",
            datumTokenizer: function (d) {
                return Bloodhound.tokenizers.whitespace(d.name);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: newcombSearch,
            limit: 10
        });        

        newcombBH.initialize();
        aatvBH.initialize();
        longLakeBH.initialize();
        raquetteLakeBH.initialize();
        washingtonCountyBH.initialize();

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
            name: "newcomb",
            displayKey: "name",
            source: newcombBH.ttAdapter(),
            templates: {
                header: "<h4 class='typeahead-header'><img src='assets/img/newcomb/newcombCluster.png' width='52' ></h4>"
            }
        }
        , {
            name: "raquetteLake",
            displayKey: "name",
            source: raquetteLakeBH.ttAdapter(),
            templates: {
                header: "<h4 class='typeahead-header'><img src='assets/img/longLake/raquetteLakeLoonLogo.jpg' width='62' height='49'></h4>"
            }
        }, {
            name: "washingtonCounty",
            displayKey: "name",
            source: washingtonCountyBH.ttAdapter(),
            templates: {
                header: "<h4 class='typeahead-header'><img src='assets/img/washingtonCounty/wct_logo.png' width='75' height='41'></h4>"
            }
        }, {
            name: "aatv",
            displayKey: "name",
            source: aatvBH.ttAdapter(),
            templates: {
                header: "<h4 class='typeahead-header'><img  src='assets/img/aatv/adirondackPartnershipLogo.jpg' width='62' height='75'></h4>"
            }
        }
        ).on("typeahead:selected", function (obj, datum) {
            if (datum.source === "aatv") {
                if (!map.hasLayer(aatvCluster)) {
                    map.addLayer(aatvCluster);
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
                    map.setView([datum.lat, datum.lng], 15);
                    if (map._layers[datum.id]) {
                        map._layers[datum.id].fire("click");
                    };
            };

            if (datum.source === "newcomb") {
                if (!map.hasLayer(newcombCluster)) {
                    map.addLayer(newcombCluster);
                    };
                    map.setView([datum.lat, datum.lng], 16);
                    if (map._layers[datum.id]) {
                        map._layers[datum.id].fire("click");
                    };
            };

            if (datum.source === "raquetteLake") {
               if (!map.hasLayer(raquetteLakeCluster)) {
                    map.addLayer(raquetteLakeCluster);
                    };
                    map.setView([datum.lat, datum.lng], 15);
                    if (map._layers[datum.id]) {
                        map._layers[datum.id].fire("click");
                    };
            };
            if (datum.source === "washingtonCounty") {
                if (!map.hasLayer(washingtonCountyCluster)) {
                    map.addLayer(washingtonCountyCluster);
                    };
                    map.setView([datum.lat, datum.lng], 15);
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

