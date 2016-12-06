    
            var map;

            var sltLayerGroup = L.layerGroup([slt,slt_edits]);

           map = L.map("map", {
                zoom: 8,
                center: [43.9504005, -74.283802],minZoom: 6,
                maxZoom: 17,
                layers: [topo,ARGISblueline, sltLayerGroup, leantoCluster, cliffsCluster ],
                zoomControl: false
    
            });

        

            map.attributionControl.setPrefix('Website by <a href="http://frontierspatial.com" target="_blank">Frontier Spatial | </a>Bootleaf template by <a href="http://bryanmcbride.com" target="_blank">Bryan McBride</a>');
            // Larger screens get expanded layer control
            if (document.body.clientWidth <= 767) {
                var isCollapsed = true;
            } else {
                var isCollapsed = false;
            };



            var baseLayers = {
                "Terrain": topo,
                "Imagery": mapquestHYB,
                "Imagery, no labels": mapquestOAM
            };

            var overlays = {
                "<img src='assets/img/leanto.png' width='18' height='21'>&nbsp;Lean-to": leantoCluster,
                "<img src='assets/img/campsite.png' width='18' height='21'>&nbsp;Primitive Campsite": campsiteCluster,
                "<img src='assets/img/parking.png' width='18' height='21'>&nbsp;Parking Area": parkingCluster,
                "<img src='assets/img/campground.png' width='18' height='21'>&nbsp;DEC Campground": campground,
                "<img src='assets/img/cliffs.png' width='18' height='21'>&nbsp;Rock Climbing Area": cliffsCluster,
                "<img src='assets/img/slt.png' width='18' height='21'>&nbsp;Hiking Trail": sltLayerGroup,
                "<img src='assets/img/blueline.png' width='18' height='21'>&nbsp;Park Boundary": ARGISblueline,
                "APA Land Classes<br>": apaLandClass

                
            };
            L.control.zoom({position: 'topleft'
            }).addTo(map);

            L.control.locate({position: 'topleft'
            }).addTo(map);

        
            var layerControl = L.control.layers(baseLayers, overlays, {
                position: 'topright',
                collapsed: isCollapsed
            }).addTo(map);

/*            var sidebar = L.control.sidebar("sidebar", {
                closeButton: true,
                position: "left"
            }).addTo(map);

            sidebar.show();*/
            // Highlight search box text on click
            $("#searchbox").click(function () {
                $(this).select();
            });

            // Typeahead search functionality
         $(document).one("ajaxStop", function () {
                $("#loading").hide();
   
                var placeBH = new Bloodhound({
                    name: "place",
                    datumTokenizer: function (d) {
                        return Bloodhound.tokenizers.whitespace(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    local: placeSearch,
                    limit: 10
                });

                var summitBH = new Bloodhound({
                    name: "summit",
                    datumTokenizer: function (d) {
                        return Bloodhound.tokenizers.whitespace(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    local: summitSearch,
                    limit: 10
                });

                var adktrailPtsBH = new Bloodhound({
                    name: "adktrailPts",
                    datumTokenizer: function (d) {
                        return Bloodhound.tokenizers.whitespace(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    local: adktrailPtsSearch,
                    limit: 10
                });

/*                var leantoBH = new Bloodhound({
                    name: "leanto",
                    datumTokenizer: function (d) {
                        return Bloodhound.tokenizers.whitespace(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    local: leantoSearch,
                    limit: 10
                });*/

                var campgroundBH = new Bloodhound({
                    name: "campground",
                    datumTokenizer: function (d) {
                        return Bloodhound.tokenizers.whitespace(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    local: campgroundSearch,
                    limit: 10
                });

                var cliffsBH = new Bloodhound({
                    name: "cliffs",
                    datumTokenizer: function (d) {
                        return Bloodhound.tokenizers.whitespace(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    local: cliffsSearch,
                    limit: 10
                });

                placeBH.initialize();
                summitBH.initialize();
                /*leantoBH.initialize();*/

                adktrailPtsBH.initialize();
                
                campgroundBH.initialize();
                cliffsBH.initialize();

                // instantiate the typeahead UI
                $("#searchbox").typeahead({
                    minLength: 3,
                    highlight: true,
                    hint: false
                }, {
                    name: "place",
                    displayKey: "name",
                    source: placeBH.ttAdapter(),
                    templates: {
                        header: "<h4 class='typeahead-header'><img src='assets/img/place.png' width='18' height='21'>&nbsp;Place</h4>"
                    }
                }, {
                    name: "summit",
                    displayKey: "name",
                    source: summitBH.ttAdapter(),
                    templates: {
                        header: "<h4 class='typeahead-header'><img src='assets/img/summit.png' width='18' height='21'>&nbsp;Summit</h4>"
                    }
                }, {
                    name: "adktrailPts",
                    displayKey: "name",
                    source: adktrailPtsBH.ttAdapter(),
                    templates: {
                        header: "<h4 class='typeahead-header'><img src='assets/img/trailhead.png' width='18' height='21'>&nbsp;Hiking Trail</h4>"
                    }
                }, {
                    name: "campground",
                    displayKey: "name",
                    source: campgroundBH.ttAdapter(),
                    templates: {
                        header: "<h4 class='typeahead-header'><img src='assets/img/campground.png' width='18' height='21'>&nbsp;DEC Campground</h4>"
                    }
                }, {
                    name: "cliffs",
                    displayKey: "name",
                    source: cliffsBH.ttAdapter(),
                    templates: {
                        header: "<h4 class='typeahead-header'><img src='assets/img/cliffs.png' width='18' height='21'>&nbsp;Rock Climbing</h4>"
                    }
                }/*, {
                    name: "leanto",
                    displayKey: "name",
                    source: leantoBH.ttAdapter(),
                    templates: {
                        header: "<h4 class='typeahead-header'><img src='assets/img/leanto.png' width='18' height='21'>&nbsp;Lean-to</h4>"
                    }
                }*/).on("typeahead:selected", function (obj, datum) {
                    if (datum.source === "place") {
                        map.setView([datum.lat, datum.lng], 14);
                        if (map._layers[datum.id]) {
                            map._layers[datum.id].fire("click");
                        };
                    };
                    if (datum.source === "summit") {
                        map.setView([datum.lat, datum.lng], 14);
                        if (map._layers[datum.id]) {
                            map._layers[datum.id].fire("click");
                        };
                    };
                    if (datum.source === "adktrailPts") {
                        if (!map.hasLayer(slt)) {
                            map.addLayer(slt);
                        };
                        map.setView([datum.lat, datum.lng], 16);
                        if (map._layers[datum.id]) {
                            map._layers[datum.id].fire("click");
                        };
                    };
                    if (datum.source === "campground") {
                        if (!map.hasLayer(campground)) {
                            map.addLayer(campground);
                        };
                        map.setView([datum.lat, datum.lng], 14);
                        if (map._layers[datum.id]) {
                            map._layers[datum.id].fire("click");
                        };
                    };

                    if (datum.source === "cliffs") {
                        if (!map.hasLayer(cliffsCluster)) {
                            map.addLayer(cliffsCluster);
                        };
                        map.setView([datum.lat, datum.lng], 16);
                        if (map._layers[datum.id]) {
                            map._layers[datum.id].fire("click");
                        };

                    };
                   /*if (datum.source === "leanto") {
                        if (!map.hasLayer(leantoCluster)) {
                            map.addLayer(leantoCluster);
                        };
                        map.setView([datum.lat, datum.lng], 15);
                        if (map._layers[datum.id]) {
                            map._layers[datum.id].fire("click");
                        };
                    };*/
                    
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

