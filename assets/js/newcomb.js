var map,trailHeadSearch = [],raquetteLakeSearch = [],newcombSearch = [];


var newcombBoundary = new L.GeoJSON(null, {
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

$.getJSON("data/newcomb/newcombBoundary.geojson", function (data) {
   newcombBoundary.addData(data);
});

var allButnewcomb = new L.GeoJSON(null, {
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

$.getJSON("data/newcomb/allButNewcomb.geojson", function (data) {
   allButnewcomb.addData(data);
});

var newcombBoundaryLayerGroup = new L.LayerGroup([
        newcombBoundary, 
        allButnewcomb
    ]);
////SNOWMOBILE TRAILS

var nysnowmobile = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/longlake/wms", {
  layers: 'newcomb:nyminusllsnowmb',
  format: 'image/png',
  transparent: true,
  opacity:0.5,
  zIndex: 100
});

var llsnowmobile = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/longlake/wms", {
  layers: 'newcomb:snowmobiletrails',
  format: 'image/png',
  transparent: true,
  zIndex: 100
});

var snowmobileLayerGroup = new L.LayerGroup([
        llsnowmobile, 
        nysnowmobile
    ]);




////HIKING TRAILS////
var otherTrails = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/ny/wms", {
  layers: 'ny:dec_hiking',
  format: 'image/png',
  opacity:1,
  transparent: true,
  zIndex:2

});

var otherTrails_edits = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/adk/wms", {
  layers: 'adk:dec_roads_trails_edits',
  format: 'image/png',
  transparent: true,
  opacity:1,
  zIndex:2

});

var sltLayerGroup = L.layerGroup([otherTrails,otherTrails_edits]);


//Newcomb
var newcombCluster = new L.MarkerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    disableClusteringAtZoom: 13,
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
            })
        }).bindLabel(feature.properties.name);
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



var finch = new L.GeoJSON(null, {
                style: function (feature) {
                    if (feature.properties.landclass === "Primitive Area") {
                        return {
                            clickable: false,
                            weight: 4,
                            color: 'deepskyblue',
                            opacity: 1,
                            //dashArray: 8,
                            fill: true,
                            fillOpacity: 0.15
                        };
                    };
                    if (feature.properties.landclass === "Wilderness Area") {
                        return {
                            clickable: false,
                            weight: 5,
                            color: 'green',
                            opacity: 1,
                            fill: true,
                            fillOpacity: 0.15
                        };
                    };
                    if (feature.properties.landclass === "Wild Forest") {
                        return {
                            
                            clickable: false,
                            weight: 4,
                            //dashArray: 6,
                            color: 'orangered',
                            opacity: 1,
                            fill: true,
                            fillOpacity: 0.15
                        };
                    };
                    if (feature.properties.landclass === "Pending") {
                        return {
                            
                            clickable: false,
                            weight:3,
                            //dashArray: "3,16",
                            color: 'darkgray',
                            opacity: 1,
                            fill: true,
                            fillOpacity: 0.45
                        };
                    };
                },

                onEachFeature: function (feature, layer) {
                    

                    if (feature.properties) {
                        
                        layer.bindPopup(
                            "<strong>Classification:&nbsp;" + feature.properties.landclass ,  {
                            closeButton: false
                        });
                    }

                }
            });


            $.getJSON("data/newcomb/finch.geojson", function (data) {
                finch.addData(data);
            });




map = L.map("map", {
    //zoom: 10,
    //center: [43.9504005, -74.283802 ],
    minZoom: 6,
    maxZoom: 18,
    layers: [blueline,newcombCluster,  snowmobileLayerGroup,newcombBoundaryLayerGroup,sltLayerGroup]

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
        
        "<img src='assets/img/newcomb/newcombCluster.png' width='55'>&nbsp;<strong>Attractions</strong>": newcombCluster,
        "<img height='21' width='18' src='assets/img/newcomb/snowmobileTrail.png'>&nbsp;<strong>Snowmobile Trails</strong>":snowmobileLayerGroup,       
        "<img height='21' width='18' src='assets/img/newcomb/slt.png'>&nbsp;<strong>Public Trails (DEC)</strong>":sltLayerGroup,
        "<img height='18' width='18' src='assets/img/newcomb/newcombBoundary.png'>&nbsp;<strong>Newcomb Township</strong>":newcombBoundaryLayerGroup,
        "<strong>APA Land Classes</strong>": apaLandClass,
        "<strong>Finch-Pruyn Purchase</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<img height='21' width='18' src='assets/img/newcomb/wilderness.png'>&nbsp;<strong>Wilderness</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<img height='21' width='18' src='assets/img/newcomb/wildforest.png'>&nbsp;<strong>Wild Forest</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<img height='21' width='18' src='assets/img/newcomb/primitive.png'>&nbsp;<strong>Primitive</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<img height='21' width='18' src='assets/img/newcomb/pending.png'>&nbsp;<strong>Pending</strong>":finch

    };



    //geocoder
/*    var osmGeocoder = new L.Control.OSMGeocoder({
            collapsed: false,
            position: 'bottomright',
            text: 'Find Address',
            });
    map.addControl(osmGeocoder);*/

    var layerControl = L.control.layers(baseLayers, overlays, {
        collapsed: false
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
        map.fitBounds(newcombBoundary.getBounds());

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


        // instantiate the typeahead UI
        $("#searchbox").typeahead({
            minLength: 3,
            highlight: true,
            hint: false
        }, {
            name: "newcomb",
            displayKey: "name",
            source: newcombBH.ttAdapter(),
            templates: {
                header: "<h4 class='typeahead-header'><img src='assets/img/newcomb/newcombCluster.png' width='32' height='40'></h4>"
            }
        }
        ).on("typeahead:selected", function (obj, datum) {

            if (datum.source === "newcomb") {
                if (!map.hasLayer(newcombCluster)) {
                    map.addLayer(newcombCluster);
                    };
                    map.setView([datum.lat, datum.lng], 16);
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

