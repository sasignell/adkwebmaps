    
            var map, placeSearch = [], historicSearch=[], museumSearch=[], artCenterSearch=[], ecoCenterSearch=[], greatCampSearch=[], theaterSearch=[], llPointSearch=[], newFeedback, feedback;

        map = L.map("map", {
            zoom: 8,
            center: [43.9504005, -74.283802 ],
            minZoom: 6,
            maxZoom: 17,
            layers: [comment, museum, theater, greatCamp, ecoCenter, artCenter, historic, ARGISblueline,newFeedback]

        });
            mapquestOSM.addTo(map);
            map.attributionControl.setPrefix('Website by <a href="http://frontierspatial.com" target="_blank">Frontier Spatial | </a>Bootleaf template by <a href="http://bryanmcbride.com" target="_blank">Bryan McBride</a>');

            // Larger screens get expanded layer control
            if (document.body.clientWidth <= 767) {
                var isCollapsed = true;
            } else {
                var isCollapsed = false;
            };

            var baseLayers = {
                "Terrain": mapquestOSM,
                "Imagery": mapquestHYB,
                "Imagery, no labels": mapquestOAM
            };

            var overlays = {
                "<img src='assets/img/adkwebmap/comment-map-icon.png' width='18' height='21'>&nbsp;Comment": comment,
                "<img src='assets/img/adkwebmap/museum.png' width='18' height='21'>&nbsp;Museum": museum,
                "<img src='assets/img/adkwebmap/theater.png' width='18' height='21'>&nbsp;Theater": theater,
                "<img src='assets/img/adkwebmap/greatCamp.png' width='18' height='21'>&nbsp;Great Camp": greatCamp,
                "<img src='assets/img/adkwebmap/ecoCenter.png' width='18' height='21'>&nbsp;Eco Center": ecoCenter,
                "<img src='assets/img/adkwebmap/artCenter.png' width='18' height='21'>&nbsp;Art Center": artCenter,
                "<img src='assets/img/adkwebmap/historic.png' width='18' height='21'>&nbsp;Historic Site": historic,
                "<img src='assets/img/adkwebmap/blueline.png' width='18' height='21'>&nbsp;Park Boundary": ARGISblueline/*,
                "<img src='assets/img/longlake/LongLakeBearLogo.jpg' width='18' height='21'>&nbsp;Long Lake Attractions": longlakeCluster */                
            };

            var layerControl = L.control.layers(baseLayers, overlays, {
                collapsed: isCollapsed
            }).addTo(map);

            L.control.locate().addTo(map);
            
/*            var sidebar = L.control.sidebar("sidebar", {
                closeButton: true,
                position: "left"
            }).addTo(map);
*/
            // Highlight search box text on click
            $("#searchbox").click(function () {
                $(this).select();
            });

var popup = new L.Popup({
            maxWidth: map.getSize().x - 50,
            maxHeight: map.getSize().y - (map.getSize().y / 2) - 50
        });

map.on('click', onMapClick);

function onMapClick(e) {
            var latlngStr = '(' + e.latlng.lat.toFixed(3) + ', ' + e.latlng.lng.toFixed(3) + ')';
            var BBOX = map.getBounds().toBBoxString();
            var WIDTH = map.getSize().x;
            var HEIGHT = map.getSize().y;
            var X = map.layerPointToContainerPoint(e.layerPoint).x;
            var Y = map.layerPointToContainerPoint(e.layerPoint).y;
            var URL = '?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&LAYERS=argis:blueline&QUERY_LAYERS=argis:blueline&STYLES=&BBOX='+BBOX+'&FEATURE_COUNT=5&HEIGHT='+HEIGHT+'&WIDTH='+WIDTH+'&FORMAT=image%2Fpng&INFO_FORMAT=text%2Fhtml&SRS=EPSG%3A4326&X='+X+'&Y='+Y;
            URL = escape(URL);
            $.ajax({
                url: "wmsproxy.php?&args=" + URL,
                dataType: "html",
                type: "GET",
                //async: false,
                success: function(data) {
                    if (data.indexOf("<table") != -1) {
                        popup.setContent(data);
                        popup.setLatLng(e.latlng);
                        map.openPopup(popup);


                    }
                }
            });


        }
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

                var historicBH = new Bloodhound({
                    name: "historic",
                    datumTokenizer: function (d) {
                        return Bloodhound.tokenizers.whitespace(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    local: historicSearch,
                    limit: 10
                });

                var museumBH = new Bloodhound({
                    name: "museum",
                    datumTokenizer: function (d) {
                        return Bloodhound.tokenizers.whitespace(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    local: museumSearch,
                    limit: 10
                });

                var artCenterBH = new Bloodhound({
                    name: "artCenter",
                    datumTokenizer: function (d) {
                        return Bloodhound.tokenizers.whitespace(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    local: artCenterSearch,
                    limit: 10
                });

                var ecoCenterBH = new Bloodhound({
                    name: "ecoCenter",
                    datumTokenizer: function (d) {
                        return Bloodhound.tokenizers.whitespace(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    local: ecoCenterSearch,
                    limit: 10
                });

                var greatCampBH = new Bloodhound({
                    name: "greatCamp",
                    datumTokenizer: function (d) {
                        return Bloodhound.tokenizers.whitespace(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    local: greatCampSearch,
                    limit: 10
                });

                var theaterBH = new Bloodhound({
                    name: "theater",
                    datumTokenizer: function (d) {
                        return Bloodhound.tokenizers.whitespace(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    local: theaterSearch,
                    limit: 10
                });

                var llPointsBH = new Bloodhound({
                    name: "llPoints",
                    datumTokenizer: function (d) {
                        return Bloodhound.tokenizers.whitespace(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    local: llPointSearch,
                    limit: 10
                });

                placeBH.initialize();
                historicBH.initialize();
                artCenterBH.initialize();
                museumBH.initialize();
                ecoCenterBH.initialize();
                greatCampBH.initialize();
                theaterBH.initialize();
                llPointsBH.initialize();

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
                        header: "<h4 class='typeahead-header'><img src='assets/img/adkwebmap/place.png' width='18' height='21'>&nbsp;Place</h4>"
                    }
                }, {
                    name: "historic",
                    displayKey: "name",
                    source: historicBH.ttAdapter(),
                    templates: {
                        header: "<h4 class='typeahead-header'><img src='assets/img/adkwebmap/historic.png' width='18' height='21'>&nbsp;Historic Site</h4>"
                    }
                }, {
                    name: "museum",
                    displayKey: "name",
                    source: museumBH.ttAdapter(),
                    templates: {
                        header: "<h4 class='typeahead-header'><img src='assets/img/adkwebmap/museum.png' width='18' height='21'>&nbsp;Museum</h4>"
                    }
                }, {
                    name: "artCenter",
                    displayKey: "name",
                    source: artCenterBH.ttAdapter(),
                    templates: {
                        header: "<h4 class='typeahead-header'><img src='assets/img/adkwebmap/artCenter.png' width='18' height='21'>&nbsp;Art Center</h4>"
                    }
                }, {
                    name: "ecoCenter",
                    displayKey: "name",
                    source: ecoCenterBH.ttAdapter(),
                    templates: {
                        header: "<h4 class='typeahead-header'><img src='assets/img/adkwebmap/ecoCenter.png' width='18' height='21'>&nbsp;Eco Center</h4>"
                    }
                }, {
                    name: "llPoints",
                    displayKey: "name",
                    source: ecoCenterBH.ttAdapter(),
                    templates: {
                        header: "<h4 class='typeahead-header'><img src='assets/img/longlake/LongLakeBearLogo.png' width='18' height='21'>&nbsp;Long Lake Attraction</h4>"
                    }
                }).on("typeahead:selected", function (obj, datum) {
                    if (datum.source === "place") {
                        map.setView([datum.lat, datum.lng], 15);
                    };
                    if (datum.source === "historic") {
                        map.setView([datum.lat, datum.lng], 15);
                    };
                     if (datum.source === "museum") {
                        map.setView([datum.lat, datum.lng], 17);
                    };
                   if (datum.source === "artCenter") {
                        if (!map.hasLayer(artCenter)) {
                            map.addLayer(artCenter);
                        };
                        map.setView([datum.lat, datum.lng], 15);
                        if (map._layers[datum.id]) {
                            map._layers[datum.id].fire("click");
                        };
                    };
                    if (datum.source === "ecoCenter") {
                        if (!map.hasLayer(ecoCenter)) {
                            map.addLayer(ecoCenter);
                        };
                        map.setView([datum.lat, datum.lng], 15);
                         if (map._layers[datum.id]) {
                            map._layers[datum.id].fire("click");
                        };
                    };
                    if (datum.source === "greatCamp") {
                        if (!map.hasLayer(greatCamp)) {
                            map.addLayer(greatCamp);
                        };
                        map.setView([datum.lat, datum.lng], 15);
                         if (map._layers[datum.id]) {
                            map._layers[datum.id].fire("click");
                        };
                    };
                    if (datum.source === "llPoints") {
                        if (!map.hasLayer(longlakeCluster)) {
                            map.addLayer(longlakeCluster);
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

